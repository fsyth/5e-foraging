import { Ingredient } from './ingredient-lists'
import { indexToRarity, Rarity } from './forage-lists'

/**
 * Rolls a die in range [1, n] with the option to reroll certain values.
 * @param n Maximum die value.
 * @param reroll Values that must be rerolled.
 */
function d(n: number, reroll: number[] = []): number {
  let roll: number
  do {
    roll = 1 + Math.random() * n | 0
  } while (reroll.includes(roll))
  return roll
}

/**
 * Class that represents one found ingredient, including its type and amount.
 */
export class Find {
  // Dice calculation workings
  amountDie: number
  typeDie: number

  // Rolls
  natAmount: number // 1+
  amount: number // 1+ (+ Survival mod for largest two rolls)
  type: number // 1-12

  // Ingredient result
  ingredient: Ingredient
  rarity: Rarity

  /**
   * Construct by rolling dice to determine what is in this find.
   * @param amountDie The maximum die value for the amount of the ingredient found.
   * @param typeDie The maximum die value for the type of ingredient found.
   * @param resultsToReroll A list of existing Finds that should be rerolled to avoid dupes.
   */
  constructor(amountDie: number, typeDie: number, resultsToReroll: Find[], ingredients: Ingredient[]) {
    this.amountDie = amountDie
    this.typeDie = typeDie

    this.natAmount = d(amountDie)
    this.amount = this.natAmount
    this.type = d(typeDie, resultsToReroll.map(r => r.type))

    this.ingredient = ingredients[this.type - 1]
    this.rarity = indexToRarity(this.type - 1)
  }

  /**
   * Logs this Find to the console.
   * @param ingredients List of ingredient names to map ingredient type number onto a type name.
   */
  log(ingredients: Ingredient[]): void {
    console.log(this.natAmount, ingredients[this.type - 1].name)
  }
}

/**
 * Calculates the yield of a successful foraging check.
 * @param survivalMod The forager's Survival modifer.
 * @param dc The Difficulty Class of the Survival check.
 * @param ingredients Forage list of ingredients in this area.
 */
export default function forage(survivalMod: number, dc = 10, ingredients: Ingredient[]): Find[] {
  const results: Find[] = []

  // Helper to push ingredients into the results array.
  const pushIngredient = (amountDie: number, typeDie: number) =>
    results.push(new Find(amountDie, typeDie, results, ingredients))

  // Common 1
  if (dc <= 10)
    pushIngredient(12, 6)

  // Common 2
  if (dc <= 15)
    pushIngredient(8, 6)

  // Uncommon
  pushIngredient(6, 10)

  // Rare
  pushIngredient(4, 12)

  // Add survival mod to largest two rolls
  survivalMod = Math.max(0, survivalMod)
  const sorted = results.slice().sort((a, b) => b.natAmount - a.natAmount)
  sorted[0].amount += survivalMod
  sorted[1].amount += survivalMod

  // Logging
  console.log(`Forage (survival mod ${survivalMod}, DC ${dc})`)
  for (let result of results) {
    result.log(ingredients)
  }

  return results
}
