
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

  const update=receivedArray.filter(item => item !==fromloc);
  
  const handleFromChange = ( value) => {
    setFromloc(value);
  };
  const handleToChange = ( value) => {
    setToloc(value);
  };

return(
    <>

    <h3>From:</h3>{
      (CityName)?<Locationselect names={receivedArray}  onSelectionChange={handleFromChange} />:<p></p>
    }
    
    <h3>To:</h3> {
      (fromloc)?<Locationselect  names={update} onSelectionChange={handleToChange} />:<p></p>
    }

    <Ticket fromloc={fromloc} toloc={toloc}/>
   
    </>
) 

}
export  {Places,Selectplace};