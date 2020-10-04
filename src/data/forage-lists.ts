import { ingredients, Ingredient } from './ingredient-lists'

export type ForageLists = {
  [key: string]: Ingredient[]
}

export const forageLists: ForageLists = {
  'Forest 1': [
    ingredients.apple,
    ingredients.herb,
    ingredients.shroom,
    ingredients.spicyPepper,
    ingredients.stamellaShroom,
    ingredients.woodlandBoar,
    ingredients.courserBeeHoney,
    ingredients.heartyRadish,
    ingredients.heartyTruffle,
    ingredients.summerwingButterfly,
    ingredients.enduraCarrot,
    ingredients.ruggedRhinoBeetle
  ],
  'Forest 2': [
    ingredients.acorn,
    ingredients.armoranth,
    ingredients.birdEgg,
    ingredients.blueNightshade,
    ingredients.woodlandDeer,
    ingredients.rushroom,
    ingredients.heartyRadish,
    ingredients.hightailLizard,
    ingredients.woodlandElk,
    ingredients.sunshroom,
    ingredients.bigHeartyRadish,
    ingredients.bladedRhinoBeetle
  ]
}

// Testing - all ingredients in one foraging list
// forageLists['All'] = Object.values(ingredients)

// Check that each foraging list has exactly 12 ingredients
for (let key in forageLists) {
  const ingredientCount = forageLists[key].length
  if (ingredientCount !== 12)
    console.error(`Foraging list '${key}' has ${ingredientCount} ingredients (expected 12)`)
}

export const defaultForageListName = Object.keys(forageLists)[0]

export enum Rarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare'
}

export function indexToRarity(index: number): Rarity {
  if (index < 6)
    return Rarity.Common

  if (index < 10)
    return Rarity.Uncommon

  return Rarity.Rare
}
