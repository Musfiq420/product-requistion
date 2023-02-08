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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

  return (
    <>
      {screen==='all'||screen==='print'?<CloseButton setScreen={setScreen} />:null}
      {screen==='selected'?<PrintButton setScreen={setScreen} />:null}
      {screen==='all'?<AllProducts category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />:null}
      {screen==='selected'?<SelectedProduct selected={selected} onDelete={onDelete} />:null}
      {screen==='all'?<BottomNav category={category} setCategory={setCategory} />:null}
      {screen==='selected'?<FloatingButton setScreen={setScreen} />:null}
      {screen==='print'?<Print selected={selected} />:null}
      {screen==='selected'?<TotalSum selected={selected} />:null}
    </>
  )
}
