import ComponentToPrint from '@/components/componentToPrint';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';


const PrintButton = ({setScreen}) => {
  


  return (
    <div style={{display:'flex', justifyContent:'flex-end', right:10, position:'fixed', bottom:20}}>
        
        <button style={{padding:10}} onClick={() => setScreen('print')}>Print</button>
    </div>
  )
}

export default PrintButton