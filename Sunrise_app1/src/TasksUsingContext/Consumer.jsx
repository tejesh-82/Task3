import React, { useContext, useState } from 'react'
import global from './CreateContext';

const Consumer = () => {
    const {places,selectedFromPlace,selectedToPlace}=useContext(global);
    const[price,setPrice]=useState();

    const getprice=()=>{
        let from;
        let to;
        for(let i=0;i<places.length;i++){
            let place=places[i];
            if(place==selectedFromPlace){
                from=i;
            }
            else if(place==selectedToPlace){
                to=i;
            }
        }
        let ticket=to-from;
        if(ticket>0){
            setPrice(ticket*25);
        }
        else{
            setPrice(Math.abs(ticket)*25)
        }
      }
  return (
    <>
        <div><button onClick={getprice}>Get</button></div><br></br>
        <h1>{price}</h1>
    </>
  )
}

export default Consumer;
