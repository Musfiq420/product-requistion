import React, { useEffect } from 'react'
import Product from './product'

const SelectedProduct = ({selected, onDelete}) => {

  const getSum = () => {
    let total = 0;
    selected.map((e) => {
        total = total + e.price*e.quantity;
    })
    return total;
  }

  return (
    <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <div style={{marginBottom:'50px'}}>
        <table style={{width:'90%', border:'1px dotted black', borderCollapse:'collapse', margin:'auto', marginTop:'20px'}} >
            <tr>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12, padding:3}} >Product Name</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12, padding:3}} >Size</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12, padding:3}} >Quantity</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12, padding:3}} >Price</th>
              <th style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12, padding:3}} >Action</th>
            </tr>
            {selected.map((e, i) => (<tr>
              <td  style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.name}</td>
              <td  style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.size}</td>
              <td  style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.quantity}</td>
              <td  style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.quantity * e.price}</td>
              <td  style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >
                <button style={{margin:'5px', padding:'5px'}} onClick={() => onDelete(e.name, e.size)}>X</button>
               </td>
            </tr>))}
            
            

          </table>
          
        </div>
        <div style={{display:'flex', justifyContent:'center', margin:'10px', position:'fixed', bottom:0, height:'50px'}}>
              <tr>
                <td colSpan={2} style={{ border:'1px dotted black', borderCollapse:'collapse', padding:10}} >Total Price</td>
                <td colSpan={2} style={{border:'1px dotted black', borderCollapse:'collapse', padding:10}} >{getSum()} taka</td>
              </tr>
            </div>
         
    </div>
  )
}

export default SelectedProduct