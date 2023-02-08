import React from 'react'

const CloseButton = ({setScreen}) => {
  return (
    <div style={{display:'flex', justifyContent:'flex-end', right:10, position:'fixed', top:10}}>
        <button style={{padding:10}} onClick={() => setScreen('selected')}>X</button>
    </div>
  )
}

export default CloseButton