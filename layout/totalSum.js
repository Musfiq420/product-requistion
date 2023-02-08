import React from 'react'

const TotalSum = ({selected}) => {

    const getSum = () => {
        let total = 0;
        selected.map((e) => {
            total = total + e.price*e.quantity;
        })
        return total;
    }

  return (
    <div style={{display:'flex', justifyContent:'center', position:'fixed', bottom:0, height:'50px', width:'100%'}}>
        <div>
            <h3>Total Price</h3>
            <p>{getSum()} taka</p>
        </div> 
        {/* <div>
            <h3>Total Price</h3>
            <p>3748 taka</p>
        </div>     */}
    </div>
  )
}

export default TotalSum