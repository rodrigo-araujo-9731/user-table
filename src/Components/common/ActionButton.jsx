import React from 'react'

const ActionButton = ({onClick, children}) => {
  return (
    <button className="actionBtn" onClick={onClick}>
    {children}
  </button>
  )
}

export default ActionButton