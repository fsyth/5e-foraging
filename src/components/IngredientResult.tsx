import React from 'react'

import { Find } from '../data/forage'

import AbilityCheckIfApplicable from './AbilityCheckIfApplicable'

export default function IngredientResult(props: {
  find: Find
}): JSX.Element {
  const find = props.find
  const ingredient = find.ingredient

  const workings = workingsTooltip(find)
  const imgSrc = `./images/ingredients/${ingredient.image}`
  const rarityClass = `rarity-${find.rarity.toLowerCase()}`
  const amountOfType = `${find.amount}× ${ingredient.name}`

  return (
    <div className="ingredient-result" title={workings}>
      <img src={imgSrc} alt=""/>
      <div><span className={rarityClass}>{amountOfType}</span></div>
      <div><AbilityCheckIfApplicable check={ingredient.check}/></div>
    </div>
  )
}

function workingsTooltip(find: Find): string {
  const arrow = '→'
  const amountWorkings = find.amount === find.natAmount
    ? `d${find.amountDie} ${arrow} ${find.amount}`
    : `d${find.amountDie} + Survival Mod ${arrow} ${find.natAmount} + ${find.amount - find.natAmount} = ${find.amount}`
  const typeWorkings = `d${find.typeDie} ${arrow} ${find.type} (${find.ingredient.name})`
  const workings = `Amount found: ${amountWorkings}\nType found: ${typeWorkings}`
  return workings
}
