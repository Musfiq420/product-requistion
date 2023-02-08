import React, { useEffect } from 'react'
import Product from './product'

const SelectedProduct = ({selected, onDelete}) => {

  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <h2 style={{textAlign:'center', marginTop:'20px'}}>Selected</h2>
        <div>
        {selected.map((e) => (<Product 
            name={e.name}
            size={e.size}
            quantity={e.quantity}
            price={e.price}
            del={true}
            onDelete={() => onDelete(e.name, e.size)}
            // price={9}
        />))
            }
        </div>
         
    </div>
  )
}

export default SelectedProduct