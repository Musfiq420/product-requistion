import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import logo from '../public/logo.png'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
// import { Router } from 'next/router'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [profileInfo, setProfileInfo] = useState({
    name:"",
    id:"",
    designation:"",
    department:"",
    unit:"",
    date: new Date().toLocaleDateString('en-CA')
  }) 
  const router = useRouter();


  return (
    <div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Image src={logo} width={300} height={300} />
      </div>
      <h2 style={{textAlign:'center'}}>Smart Product Requision</h2>
      <h4 style={{textAlign:'center', opacity:'30%'}}>Square Fashions Ltd</h4>
      <div style={{margin:'20px'}}>
        <table style={{border:'1px solid black', borderCollapse:'collapse', margin:'auto', marginTop:'10px'}} >
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Name</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input style={{padding:5}} value={profileInfo.name} onChange={(e) => setProfileInfo({...profileInfo, name:e.target.value})} placeholder='type... name' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >ID</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input style={{padding:5}} value={profileInfo.id} onChange={(e) => setProfileInfo({...profileInfo, id:e.target.value})} placeholder='type... ID' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Designation</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input style={{padding:5}} value={profileInfo.designation} onChange={(e) => setProfileInfo({...profileInfo, designation:e.target.value})} placeholder='type... designation' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Department</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input style={{padding:5}} value={profileInfo.department} onChange={(e) => setProfileInfo({...profileInfo, department:e.target.value})} placeholder='type... department' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Unit</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input style={{padding:5}} value={profileInfo.unit} onChange={(e) => setProfileInfo({...profileInfo, unit:e.target.value})} placeholder='type... unit' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Date</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} ><input type="date" style={{padding:5}} defaultValue={profileInfo.date} value={profileInfo.date} onChange={(e) => setProfileInfo({...profileInfo, date: e.target.value})} placeholder='type... unit' className={styles.in} /></td>
          </tr>
        </table>
      </div>
      <div style={{margin:'20px', display:'flex', justifyContent:'center'}}>
        <button style={{padding:10}} onClick={() => {
          router.push({
            pathname: '/main',
            query: {...profileInfo}
        }, '/main')
          console.log(profileInfo)
          }}>Start Shopping</button>
      </div>
    </div>
    
  )
      
    
  
}
