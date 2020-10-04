import React from 'react'

import { Find } from '../data/forage'

import IngredientResult from './IngredientResult'

export const ForageResultMemo = React.memo(ForageResult)

export default function ForageResult(props: {
  result: Find[]
}): JSX.Element {
  return (
    <div className="forage-result">
      {props.result.map((find, index) => (
        <IngredientResult find={find} key={index}/>
      ))}
    </div>
  )
}
