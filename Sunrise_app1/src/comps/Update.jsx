// import React, { useState,useRef } from 'react'
// const Update = (props) => {
//     const food1=useRef(null);
//     const price1=useRef(null);
//     // const [food1,setFood1]=useState();
//     // const [price1,setPrice1]=useState();
//     // const [item,setItem]=useState({});
//     // setItem(props);
//     const url=`http://localhost:4000`;
//     // const {_id,food,price}=props;
//     const changeOne = async() =>{
//         const data=await axios.put(url+`/update`,{
//             _id:_id,
//             food:food1.current.value,
//             price:price1.current.value
//         });
//         nav
//     }
//   return (
//     <>
//       <div>
//         <h1>update</h1>
//         food:<input type='text' ref={food1} value={item.food} onChange={()=>{setItem(food1.current.value)}}/><br />
//         Price:<input type='text' ref={price1} value={item.price} onChange={()=>{setItem(price1.current.value)}}/><br />
//         <button onClick={changeOne}>update</button>
//        </div>
//     </>
//   )
// }

// export default Update




import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Update = (props) => {
  
  const [upd,setUpd]=useState({});
  setUpd(props.data);
  const food=useRef(null);
  const price=useRef(null);
  const url=`http://localhost:4000`;
  const updateone=()=>{
    const up=axios.put(url+`/update`,{
      _id:data._id,
      food:food.current.value,
      price:price.current.value
    });
  }
  return (
    <>
      Food:<input ref={food} /><br />
      Price:<input ref={price} /><br/>
      <button onClick={updateone}>UPDATE</button>

    </>
  )
}
export default Update















