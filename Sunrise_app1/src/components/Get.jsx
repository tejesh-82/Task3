import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Get = () => {
  const [formData,setFormData]=useState({
    food:"",
    price:""
  })
  const [formDataedit,setFormDataedit]=useState({
    _id:"",
    food:"",
    price:""
  })
  const [all,setAll]=useState([]);

  axios.defaults.baseURL="http://localhost:4000/";
  
  const hand=(e)=>{
    const {value,name}=e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  const post=async (e)=>{
    e.preventDefault()
    const data=await axios.post('/post',formData) 
    get();
    console.log(data);
  }

  useEffect(()=>{
    get()
  },[])

  const get=async()=>{
    const result=await axios.get('/get');
    setAll(result.data);
  }

  const delete_one=async(id)=>{
    const data=await axios.delete('/delete/'+id);
    get();
    alert(data.data.message);
  }

  const update_one=async ()=>{
    const data=await axios.put('/update',formDataedit) 
    get();
    alert(data.data.message)
  }
  const handedit=(e)=>{
    const {value,name}=e.target
    setFormDataedit((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const edit_one=async(el)=>{
    setFormDataedit(el);
  }
  // const food=useRef(null);
  // const price=useRef(null);
  // const [all,setAll]=useState([]);

  // useEffect(()=>{
  //   getall();
  // },[])
  // const getall=async()=>{
  //     const {result}=await axios.get('/get');
  //     setAll(result.data);
  //   }

  // const handle=async()=>{
  //   const data = await axios.post('/post',{food:food.current.value,price:price.current.value});
  //   console.log(data);
  // }

 return (
    <>
      
      <div className='form'>
        <form onSubmit={post}>
          Food:<input name="food" onChange={hand} /><br />
          Price:<input name="price" onChange={hand} /><br />
          <button>post</button>
        </form>
      </div>

      <div className='table'>
      <table>
        <thead>
          <tr>
            <th>food</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            all[0] ? (
              
                all.map((el)=>{
                  return(
                    <tr>
                      <td>{el.food}</td>
                      <td>{el.price}</td>
                      <td>
                        <button onClick={()=>{edit_one(el),update_one}}>edit</button>
                        <button onClick={()=>{delete_one(el._id)}}>delete</button>
                      </td>
                    </tr>
                  )
                })
              
            ): (
              <p>No data</p>
            )
          }
        </tbody>
        <tfoot></tfoot>
      </table>
      </div>
      
      <div className='form1'>
        <form onSubmit={update_one}>
          Food:<input name="food" onChange={handedit} value={formDataedit.food} /><br />
          Price:<input name="price" onChange={handedit} value={formDataedit.price} /><br />
          <button >post</button>
        </form>
      </div>
      {/* <div>
        
          Food:<input name="food" ref={food} /><br />
          Price:<input name="price" ref={price} /><br />
          <button onClick={handle}>post</button>
        
      </div>

      <div className='table'>
      <table>
        <thead>
          <tr>
            <th>food</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            all[0] ? (
              
                all.map((el)=>{
                  return(
                    <tr>
                      <td>{el.food}</td>
                      <td>{el.price}</td>
                      <td>
                        <button >edit</button>
                        <button >delete</button>
                      </td>
                    </tr>
                  )
                })
              
            ): (
              <p>No data</p>
            )
          }
        </tbody>
        <tfoot></tfoot>
      </table>
      </div> */}
    </>
  )
}

export default Get