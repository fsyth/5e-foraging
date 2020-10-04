import React from 'react'

export default function AbilityCheckIfApplicable(props: {
  check: string | undefined
}): JSX.Element | null {
  if (!props.check)
    return null

  return <span className="ability-check">({props.check})</span>
}
