import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Update from './Update';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const [edit,setEdit]=useState();
    const navigate=useNavigate();
    const [res,setRes]=useState([]);
    
    const url=`http://localhost:4000`;

    const getall=async()=>{
        const {data}=await axios.get(url+`/get`)
        const result=data;
        setRes(result);
    }
    useEffect(()=>{
        getall()
    },[])

    const deletedata=async(id)=>{
        const data=await axios.delete(url+`/delete/${id}`);
        getall();
    }

    const updateone=(element)=>{
        setEdit(element);
        navigate('/update');
    }
  return (
    <>
        
       {/* <div>
        food:<input type='text' ref={food}/><br />
        Price:<input type='text' ref={price}/><br />
        <button onClick={postdata}>Post</button>
       </div> */}
       <table>
        <thead>
            <tr>
                <th>food</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {
                res.map((element)=>{
                    return(
                        <tr>
                            <td>{element.food}</td>
                            <td>{element.price}</td>
                            <td><button onClick={()=>{updateone(element)}}>Edit</button></td>
                            <td><button onClick={()=>{deletedata(element._id)}}>delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
        <tfoot></tfoot>
       </table>
            
       {/* <div>
        food:<input type='text' ref={food} value={food1} onChange={()=>{setFood1(food.current.value)}}/><br />
        Price:<input type='text' ref={price} value={price1} onChange={()=>{setPrice1(price.current.value)}}/><br />
        <button onClick={changeOne}>update</button>
       </div>
       */}
    </>
  )
}


export default Main
