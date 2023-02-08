import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import styles from '../styles/Home.module.css'

const ComponentToPrintBangla = React.forwardRef((props, ref) => {

  const character = ["১" ,"২" ,"৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০", "১১", "১২", "১৩", "১৪", "১৫", "১৬" ,"১৭", "১৮","১৯", "২০", "২১", "২২", "২৩", "২৪", "২৫", "২৬", "২৭" ,"২৮" ,"২৯", "৩০", "৩১", "৩২"]

  

  return (
    <div ref={ref}>
        <div style={{display:'flex',  justifyContent:'space-between', margin:'auto', width:'80%', marginTop:'40px'}} >
          <div>
            <p style={{fontSize:12}}>স্কয়ার ফ্যাশনস লিমিটেড</p>
            <p style={{fontSize:12}}>ভালুকা, ময়মনসিংহ। </p>
          </div>
          <p style={{fontSize:12}}>তারিখ- {(new Date()).toLocaleDateString("bn-BD")}</p>
        </div>
        
        <h5 style={{textAlign:'center', textDecoration:'underline'}}>পণ্যের চাহিদা পত্র</h5>
        <div>
        <table style={{width:'80%', border:'1px solid black', borderCollapse:'collapse', margin:'auto', marginTop:'10px'}} >
          <tr>
            <td width='20%' style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >নাম</td>
            <td width='80%' style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} ><input placeholder='type... name' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >আইডি</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} ><input placeholder='type... ID' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >পদবী</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} ><input placeholder='type... designation' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >বিভাগ</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} ><input placeholder='type... department' className={styles.in} /></td>
          </tr>
          <tr>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >ইউনিট</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} ><input placeholder='type... unit' className={styles.in} /></td>
          </tr>
        </table>
        <table style={{width:'80%', border:'1px solid black', borderCollapse:'collapse', margin:'auto', marginTop:'10px'}} >
          <tr>
            <th style={{ border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >ক্রমিক নং</th>
            <th  style={{border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >পণ্যের নাম</th>
            <th  style={{border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >সাইজ(প্যাক/ওজন)</th>
            <th  style={{border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >পরিমাণ</th>
            <th  style={{border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >টাকা</th>
            <th style={{border:'1px solid black', borderCollapse:'collapse', fontSize:12}} >মন্তব্য</th>
          </tr>
          {props.selected.map((e, i) => (<tr>
            <td style={{border:'1px solid black', borderCollapse:'collapse', padding:2, fontSize:12}} >{character[i]}</td>
            <td style={{border:'1px solid black', borderCollapse:'collapse', padding:2}} >{e.name}</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2}} >{e.size}</td>
            <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:2}} >{e.quantity}</td>
            <td style={{border:'1px solid black', borderCollapse:'collapse', padding:2}} >{e.price}</td>
            <td width='10%' style={{border:'1px solid black', borderCollapse:'collapse', padding:2}} ></td>
          </tr>))}
        </table>
        </div>
        <div style={{display:'flex',  justifyContent:'space-between',width:'80%', margin:'auto',  marginTop:'40px'}} >
          <div>
            <p>____________________</p>
            <p  style={{fontSize:12}}>শ্রমিকের স্বাক্ষর</p>
          </div>
          <div>
            <p>____________________</p>
            <p  style={{fontSize:12}}>দোকানে দায়িত্বপ্রাপ্ত ব্যাক্তির স্বাক্ষর</p>
          </div>
        </div>
    </div>
  )
})

const ComponentToPrintEnglish = React.forwardRef((props, ref) => {

    

    return (
      <div ref={ref}>
          <div style={{display:'flex',  justifyContent:'space-between', margin:'20px'}} >
            <div>
              <p>Square Fashions Ltd </p>
              <p>Bhaluka, Mymensingh</p>
            </div>
            <p>Date: {(new Date()).toLocaleDateString("en-AU")}</p>
          </div>
          
          <h3 style={{textAlign:'center'}}>Product Requisition Form</h3>
          <div>
          <table style={{width:'80%', border:'1px solid black', borderCollapse:'collapse', margin:'auto', marginTop:'20px'}} >
            <tr>
              <td width='20%' style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Name</td>
              <td width='80%' style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Md. Musfiqur Rahman</td>
            </tr>
            <tr>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >ID</td>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >33066825</td>
            </tr>
            <tr>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Designation</td>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Executive-II</td>
            </tr>
            <tr>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Department</td>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >IE and Workstudy</td>
            </tr>
            <tr>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >Unit</td>
              <td  style={{border:'1px solid black', borderCollapse:'collapse', padding:5}} >GU-1</td>
            </tr>
          </table>
          <table style={{width:'80%', border:'1px dotted black', borderCollapse:'collapse', margin:'auto', marginTop:'20px'}} >
            <tr>
              <th style={{ border:'1px dotted black', borderCollapse:'collapse'}} >Serial<br/>No</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse'}} >Product Name</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12}} >Size <br/>(Pack/Weight)</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse', fontSize:12}} >Quantity</th>
              <th  style={{border:'1px dotted black', borderCollapse:'collapse'}} >Price</th>
              <th style={{border:'1px dotted black', borderCollapse:'collapse'}} >Remarks</th>
            </tr>
            {props.selected.map((e, i) => (<tr>
              <td width="5%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{i+1}</td>
              <td width="55%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.name}</td>
              <td width="10%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.size}</td>
              <td width="5%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} >{e.quantity}</td>
              <td width="10%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} ></td>
              <td width="15%" style={{border:'1px dotted black', borderCollapse:'collapse', padding:2}} ></td>
            </tr>))}
          </table>
          </div>
          <div style={{display:'flex',  justifyContent:'space-between', marginLeft:'50px', marginRight:'50px', margin:'30px'}} >
            <div>
              <p>____________________</p>
              <p>Employee's sign</p>
            </div>
            <div>
              <p>____________________</p>
              <p>Responsible Sales<br/>Person's sign</p>
            </div>
          </div>
      </div>
    )
  })

const Print = ({selected}) => {

  const [ultimateSelected, setUltimateSelected] = useState([])
  useEffect(() => {
    const tempSelected = [];
    for(let i = 0; i < 30; i++)
    {
      if(selected[i])
      {
        tempSelected.push({
          "name": selected[i].name,
          "size": selected[i].size,
          "category": selected[i].category,
          "price": selected[i].price*selected[i].quantity,
          "quantity": selected[i].quantity
        })
      }
      else {
        tempSelected.push({
          "name": "",
          "size": "",
          "category": "",
          "price": "",
          "quantity": ""
        })
      }
      
    }
    setUltimateSelected([...tempSelected]);
  }, [])

    const componentRef = useRef();
  return (
    <div>
        <ComponentToPrintBangla ref={componentRef} selected={ultimateSelected} />
        <div style={{display:'flex', justifyContent:'center', padding:'20px'}}>
      <ReactToPrint 
        trigger={() => <button style={{padding:'10px'}} >Print this out!</button>}
        content={() => componentRef.current}
    />
      </div>
  </div>
  )
}

export default Print;
