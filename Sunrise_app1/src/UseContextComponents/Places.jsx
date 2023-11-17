
import React, { useState } from "react";
import  {global}  from "./Context";
import Ticket from "./Ticket";
import { useContext } from "react";
import Locationselect from "./Locationselect";

const Selectplace = (CityName) => {
  if(CityName=='hyderabad'){
    return ['a','b','c'];
  }
  else if(CityName=='delhi'){
    return ['x','y','z'];
  }
  else if(CityName=='chennai'){
    return ['1','2','3'];
  }
  else{
    return []
  }
}
const Places=()=>{
  const [fromloc,setFromloc]=useState();
  const [toloc,setToloc]=useState();
  
  const CityName=useContext(global);

  
  const receivedArray=Selectplace(CityName);
  
  const handleFromChange = ( value) => {
    setFromloc(value);
  };
  const handleToChange = ( value) => {
    setToloc(value);
  };

return(
    <>

    <h3>From:</h3><Locationselect names={receivedArray}  onSelectionChange={handleFromChange} /><br></br>
    
    <h3>To:</h3> <Locationselect  names={receivedArray} onSelectionChange={handleToChange} /><br />

    <Ticket fromloc={fromloc} toloc={toloc}/>
   
    </>
)

}
export  {Places,Selectplace};