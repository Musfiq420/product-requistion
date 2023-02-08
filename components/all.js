import Product from '@/components/product'
import React, { useEffect, useState } from 'react'
import productList from '../lib/productList.json'



const AllProducts = ({category, selected, setSelected, setScreen}) => {
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
      setProductInfo(productList.filter((e) => {
        return (e.category===category)
      }))
    }, [category])

    const onSetSelected = (name, size) => {
      // console.log('executed')
      const tempProduct = selected; 
      productInfo.map((e) => {
        if(e.name===name && e.size===size)
        {
          let found = false;
          tempProduct.map((f, index) => {
            if(f.name===e.name && f.size===e.size)
            {
              found = true;
              const q = f.quantity+1;
              tempProduct[index] = {name:f.name, size:f.size, price:f.price, quantity:q}
            }
          })
          if(!found)
          {
            console.log('not found: '+e);
            tempProduct.push({name:e.name, size:e.size, price:e.price, quantity:1});
          }
            
        }
        
      })
      console.log(tempProduct);
      setSelected([...tempProduct]);
      setScreen('selected')
    }
 
  return (
    <div style={{marginBottom:'50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{marginTop:'20px'}}>
          <h2>{category}</h2>
        </div>
        {productInfo.map((e) => (<Product 
            name={e.name}
            size={e.size}
            add={true}
            price={e.price}
            // quantity={e.quantity}
            onSetSelected={() => onSetSelected(e.name, e.size)}
            // price={9}
        />))
            }
        
    </div>
  )
}

export default AllProducts