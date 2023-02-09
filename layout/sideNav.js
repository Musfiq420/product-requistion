import { useRouter } from 'next/router'
import React from 'react'

const SideNav = ({category, setCategory}) => {
    
  const router = useRouter();
  return (
    <div style={{ display:'flex', flexDirection:'column', position:'fixed', height:'100%', left:0, width:'200px', border:'1px solid black'}}>
            <div style={{display:'flex', height:'50px', textAlign:'center', padding:'10px', alignItems:'center'}}>
              <button onClick={() => router.back()} style={{margin:'10px', padding:'5px'}}>Back</button> <h3>Categories</h3>
            </div>
            <button style={{height:'50px', borderColor:'#DCDCDC', backgroundColor:category==='food'?null:"white"}} onClick={() => setCategory('food')}>Food</button>
        
        
            <button style={{height:'50px',borderColor:'#DCDCDC', backgroundColor:category==='health'?null:"white"}} onClick={() => setCategory('health')}>Health</button>
        
            <button style={{height:'50px',borderColor:'#DCDCDC',  backgroundColor:category==='soap'?null:"white"}} onClick={() => setCategory('soap')}>Soap</button>
        
            <button style={{height:'50px',borderColor:'#DCDCDC',  backgroundColor:category==='crop'?null:"white"}} onClick={() => setCategory('crop')}>Crop</button>
        
            <button style={{height:'50px',borderColor:'#DCDCDC',  backgroundColor:category==='tea'?null:"white"}} onClick={() => setCategory('tea')}>Tea</button>
        
            <button style={{height:'50px',borderColor:'#DCDCDC',  backgroundColor:category==='toilet'?null:"white"}} onClick={() => setCategory('toilet')}>Toiletries</button>
        
    </div>
  )
}

export default SideNav