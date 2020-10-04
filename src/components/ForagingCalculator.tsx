import React, { useState } from 'react'

import forage, { Find } from '../data/forage'
import { forageLists, defaultForageListName } from '../data/forage-lists'

import { ForageTableMemo } from './ForageTable'
import ForagingCheckControls from './ForagingCheckControls'
import ForageResultsHistory from './ForageResultsHistory'

import './css/forage.css'

export default function ForagingCalculator(): JSX.Element {
  const [forageListName, setForageListName] = useState(defaultForageListName)
  const [survivalMod, setSurvivalMod] = useState(0)
  const [dc, setDc] = useState(10)
  const [resultsHistory, setResultsHistory] = useState<Find[][]>([])

  const forageList = forageLists[forageListName]
  const goForaging = () =>
    setResultsHistory([...resultsHistory, forage(survivalMod, dc, forageList)])

  return (
    <div className="forage-calculator">
      <h1>Foraging Calculator</h1>
      <ForageTableMemo forageList={forageList}/>
      <ForagingCheckControls
        forageListName={forageListName} setForageListName={setForageListName}
        survivalMod={survivalMod} setSurvivalMod={setSurvivalMod}
        dc={dc} setDc={setDc}/>
      <button className="forage-button" onClick={goForaging}>Forage!</button>
      <ForageResultsHistory resultsHistory={resultsHistory}/>
    </div>
  )
}
