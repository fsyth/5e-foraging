import React from 'react'

import ForageListSelection from './ForageListSelection'

export default function ForagingCheckControls(props: {
  forageListName: string
  setForageListName: (value: string) => void
  survivalMod: number
  setSurvivalMod: (value: number) => void
  dc: number
  setDc: (value: number) => void
}): JSX.Element {
  return (
    <div className='forage-controls'>

      <div>
        <label>Environment</label>
        <ForageListSelection forageListName={props.forageListName} setForageListName={props.setForageListName}/>
      </div>

      <div>
        <label>Survival Modifier</label>
        <input type="number" min="-5" max="22" value={props.survivalMod} onChange={e => props.setSurvivalMod(parseInt(e.target.value, 10))}/>
      </div>

      <div>
        <label>Food Availability</label>
        <select value={props.dc} onChange={e => props.setDc(parseInt(e.target.value, 10))}>
          <option key="10" value="10">Abundant (DC 10)</option>
          <option key="15" value="15">Limited (DC 15)</option>
          <option key="20" value="20">Very little, if any (DC 20)</option>
        </select>
      </div>

    </div>
  )
}
