import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Post = () => {
    const food=useRef(null);
    const price=useRef(null);
    const navigate=useNavigate();
    const url=`http://localhost:4000`;
    const postdata=async()=>{
        const data1=await axios.post(url+`/post`,{
            food:food.current.value,
            price:price.current.value
        });
        navigate('/');
    }
  return (
    <div>
        food:<input type='text' ref={food}/><br />
        Price:<input type='text' ref={price}/><br />
        <button onClick={postdata}>Post</button>
    </div>
  )
}

export default Post
