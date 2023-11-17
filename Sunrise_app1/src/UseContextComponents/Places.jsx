
import React, { useState } from "react";
import  {global}  from "./Context";
import Ticket from "./Ticket";
import { useContext } from "react";
import Locationselect from "./Locationselect";
import Selectplace from "./Selectplace";
const Places=()=>{
  const [fromloc,setFromloc]=useState();
  const [toloc,setToloc]=useState();

  // const [receivedArray, setReceivedArray] = useState([]);
  // const handleDataReceive = (newArray) => {
  //   setReceivedArray(newArray);
  // };

  const receivedArray=Selectplace();

  const handleFromChange = ( value) => {
    setFromloc(value);
  };
  const handleToChange = ( value) => {
    setToloc(value);
  };
return(
    <>
    {/* <Selectplace onDataReceive={handleDataReceive} /> */}

    <h3>From:</h3><Locationselect names={receivedArray}  onSelectionChange={handleFromChange} /><br></br>
    
    <h3>To:</h3> <Locationselect  names={receivedArray} onSelectionChange={handleToChange} /><br />

    <Ticket fromloc={fromloc} toloc={toloc}/>
   
    </>
)

}
export default Places;