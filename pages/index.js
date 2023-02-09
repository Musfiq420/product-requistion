import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AllProducts from '../components/all'
import BottomNav from '@/layout/bottomNav'
import { useState } from 'react'
import SelectedProduct from '@/components/selected'
import FloatingButton from '@/layout/floatingButton'
import CloseButton from '@/layout/closeButton'
import PrintButton from '@/layout/printButton'
import Print from '@/components/print'
import TotalSum from '@/layout/totalSum'
import SideNav from '@/layout/sideNav'
import useDeviceSize from '@/hooks/useWindowDimensions'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [width, height] = useDeviceSize();
  const [category, setCategory] = useState('food');
  const [selected, setSelected] = useState([]);
  const [screen, setScreen] = useState('selected');
  
  const onDelete = (name, size) => {
    const tempSelected = selected;
    selected.map((e, i) => {
      if(e.name===name && e.size===size)
      {
        
          const q = e.quantity-1;
          tempSelected[i] = {name:e.name, size:e.size, price:e.price, quantity:q}
        
      }
      console.log(tempSelected)

        

      setSelected(tempSelected.filter((e) => {
        return (e.quantity>0)
      }))
    })
  }

  return (<div>
      {width>900?<div>
        {screen==='print'?
          <div>
            <Print selected={selected} />
            <CloseButton setScreen={setScreen} />
          </div>
        :
          <div style={{display:'flex', height:'100vh', justifyContent:'space-between'}}>
          <div style={{width:'70%', overflowY:'scroll'}}>
            <SideNav category={category} setCategory={setCategory} /> 
            <div style={{marginLeft:'150px'}}>
              <AllProducts category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />
            </div>
          </div>

          <div style={{width:'30%', height:'80vh', overflowY:'scroll', marginTop:'50px'}}>
            <SelectedProduct selected={selected} onDelete={onDelete} />
            <PrintButton setScreen={setScreen} />
          </div>
        </div>
        }
      </div>:
        <div>
          {screen==='selected'?
          <div>
            <SelectedProduct selected={selected} onDelete={onDelete} />
            <FloatingButton setScreen={setScreen} />
            <PrintButton setScreen={setScreen} />
          </div>
          :screen==='all'?
          <div>
            <AllProducts category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />
            <CloseButton setScreen={setScreen} />
            <BottomNav category={category} setCategory={setCategory} />
          </div>
          :
          <div>
            <Print selected={selected} />
            <CloseButton setScreen={setScreen} />
          </div>
        }
        </div>}
      </div>)
      
      {/* {screen==='all'||screen==='print'?<CloseButton setScreen={setScreen} />:null}
      {screen==='selected'?<PrintButton setScreen={setScreen} />:null}
      {screen==='all'?<AllProducts category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />:null}
      {screen==='selected'?<SelectedProduct selected={selected} onDelete={onDelete} />:null}
      {screen==='all'?<BottomNav category={category} setCategory={setCategory} />:null}
      {screen==='selected'?<FloatingButton setScreen={setScreen} />:null} */}
      
      {/* {screen==='selected'?<TotalSum selected={selected} />:null} */}
    
  
}
