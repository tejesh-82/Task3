import React from 'react'
import { useState } from 'react';
import Selectplace from './Selectplace';
const Ticket = (props) => {
  const {fromloc,toloc}=props;  
const receivedArray=Selectplace();
  let index1;
  let index2;
  for (let i=0;i<receivedArray.length;i++){
    if(fromloc==receivedArray[i]){
      index1=i;
    }
    else if(toloc==receivedArray[i]){
      index2=i
    }
  }
  let ticket=index2-index1;
  let price;
  if(ticket>0){
    price=ticket*25;
  }
  else{
    price=Math.abs(ticket)*25;
  }
  return (
    <>
      {
        (price>0)?<p>{price}</p>:<p></p>
      }
    </>
  )
}

export default Ticket
