import React from 'react'

import { Find } from '../data/forage'

import { ForageResultMemo } from './ForageResult'

export default function ForageResultsHistory(props: {
  resultsHistory: Find[][]
}): JSX.Element {
  return (
    <div className="forage-results-history">
      {props.resultsHistory.map((result, index) => (
        <ForageResultMemo result={result} key={index}/>
      )).reverse()}
    </div>
  )
}
