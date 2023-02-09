import React from 'react'

const Product = ({name, size, price, quantity, onSetSelected, add=false, del=false, onDelete}) => {
  return (
    <div style={{margin: '5px',width:'300px',  border:'1px solid black'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{padding:'5px', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                <div>
                    <h3>{name}</h3>
                    <p style={{fontSize:16}}>{size}</p> 
                    <p style={{fontSize:20}}>{price} taka</p>
                </div>
                {add?
                    <button style={{margin:'5px', padding:'5px', width:'150px'}} onClick={onSetSelected}>Add</button>
                :null}
            </div> 
            
            {/* <div style={{padding:'5px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <p>{quantity}</p>
            </div>     */}
              
            {del?
            <div style={{padding:'5px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <p>{quantity}</p>
                <button style={{margin:'5px', padding:'5px'}} onClick={onDelete}>X</button>
            </div>:null} 
            
        </div>
        
    </div>
    
  )
}

export default Product