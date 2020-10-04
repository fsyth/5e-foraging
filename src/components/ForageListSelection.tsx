import React from 'react'

import { forageLists } from '../data/forage-lists'

export default function ForageListSelection(props: {
  forageListName: string,
  setForageListName: (value: string) => void
}): JSX.Element {
  const forageListNames = Object.keys(forageLists)
  return (
    <select value={props.forageListName} onChange={e => props.setForageListName(e.target.value)}>
      {forageListNames.map(listName => (
        <option key={listName}>{listName}</option>
      ))}
    </select>
  )
}
