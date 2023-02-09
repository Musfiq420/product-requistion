import useDeviceSize from '@/hooks/useWindowDimensions';
import React, { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AllProducts from '../components/all'
import BottomNav from '@/layout/bottomNav'
import SelectedProduct from '@/components/selected'
import FloatingButton from '@/layout/floatingButton'
import CloseButton from '@/layout/closeButton'
import PrintButton from '@/layout/printButton'
import Print from '@/components/print'
import SideNav from '@/layout/sideNav'
import { useRouter } from 'next/router';
import Back from '@/layout/backButton';
import BackButton from '@/layout/backButton';

const Main = () => {
    const [width, height] = useDeviceSize();
    const [category, setCategory] = useState('food');
    const [selected, setSelected] = useState([]);
    const [screen, setScreen] = useState('selected');
    const [posY, setPosY] = useState(0)
    

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
                <AllProducts posY={posY} setPosY={setPosY} category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />
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
            <div style={{height:'80vh',overflowY:'scroll', marginTop:'50px'}}>
              <BackButton />
              <SelectedProduct selected={selected} onDelete={onDelete} />
              <FloatingButton setScreen={setScreen} />
              <PrintButton setScreen={setScreen} />
              <BackButton />
            </div>
            :screen==='all'?
            <div>
              <AllProducts posY={posY} setPosY={setPosY} category={category} selected={selected} setSelected={setSelected} setScreen={setScreen} />
              <CloseButton setPosY={setPosY} setScreen={setScreen} />
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
}

export default Main