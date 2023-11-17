import React, { useContext, useState } from 'react'
import '../Tasks/Task4.css'
const Print = (props) => {
    const [amount,setAmount]=useState();
    const getamount=()=>{
        setAmount(props.amount);
    }
  return (
    <>
      <button onClick={getamount}>Amount</button>
      {
        (amount==0)?<p>enter different stations</p>:<h1>{amount}</h1>
      }
    </>
  )
}

export default Print;
