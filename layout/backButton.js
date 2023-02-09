import { useRouter } from 'next/router';
import React from 'react'

const BackButton = () => {
  const router = useRouter();
  return (
    <div style={{display:'flex', justifyContent:'flex-end', left:10, position:'fixed', top:20}}>
      <button style={{padding:10}} onClick={() => router.back()}>Back</button>
    </div>
  )
}

export default BackButton