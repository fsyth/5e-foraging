import React from 'react'

import { indexToRarity } from '../data/forage-lists'
import { Ingredient } from '../data/ingredient-lists'

import AbilityCheckIfApplicable from './AbilityCheckIfApplicable'

export const ForageTableMemo = React.memo(ForageTable)

export default function ForageTable(props: {
  forageList: Ingredient[]
}): JSX.Element {
  return (
    <table className="forage-table">
      <thead>
        <tr>
          <td>Roll</td>
          <td colSpan={3}>Ingredient</td>
          <td>Rarity</td>
        </tr>
      </thead>
      <tbody>
        {props.forageList.map((ingredient, index) => (
          <ForageTableRow ingredient={ingredient} index={index} key={index}/>
        ))}
      </tbody>
    </table>
  )
}

function ForageTableRow(props: {
  ingredient: Ingredient
  index: number
}): JSX.Element {
  const rarity = indexToRarity(props.index)
  const rarityClass = `rarity-${rarity.toLowerCase()}`
  const imgSrc = `./images/ingredients/${props.ingredient.image}`

  return (
    <tr className={rarityClass}>
      <td>{props.index + 1}</td>
      <td><img src={imgSrc} alt=""/></td>
      <td>{props.ingredient.name}</td>
      <td><AbilityCheckIfApplicable check={props.ingredient.check}/></td>
      <td>{rarity}</td>
    </tr>
  )
}
