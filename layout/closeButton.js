import React from 'react'

const CloseButton = ({setScreen, setPosY}) => {
  return (
    <div style={{display:'flex', justifyContent:'flex-end', right:10, position:'fixed', top:10}}>
        <button style={{padding:10}} onClick={() => {if(setPosY)setPosY(window.scrollY); setScreen('selected')}}>X</button>
    </div>
  )
}

export default CloseButton