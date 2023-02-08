import React from 'react'

const FloatingButton = ({setScreen}) => {
  return (
    <div style={{display:'flex', justifyContent:'flex-end', right:20, position:'fixed', bottom:50}}>
        <button style={{padding:20}} onClick={() => setScreen('all')}>ADD</button>
    </div>
  )
}

export default FloatingButton