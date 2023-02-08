import React from 'react'

const BottomNav = ({category, setCategory}) => {
    

  return (
    <div style={{display:'flex', position:'fixed', bottom:0, height:'50px', width:'100%'}}>
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='food'?null:"white"}} onClick={() => setCategory('food')}>Food</button>
        
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='health'?null:"white"}} onClick={() => setCategory('health')}>Health</button>
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='soap'?null:"white"}} onClick={() => setCategory('soap')}>Soap</button>
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='crop'?null:"white"}} onClick={() => setCategory('crop')}>Crop</button>
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='tea'?null:"white"}} onClick={() => setCategory('tea')}>Tea</button>
        
            <button style={{height:'50px', width:'16.67%', backgroundColor:category==='toilet'?null:"white"}} onClick={() => setCategory('toilet')}>Toiletries</button>
        
    </div>
  )
}

export default BottomNav