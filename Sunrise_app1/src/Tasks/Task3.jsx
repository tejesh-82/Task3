import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
const Task3 = () => {

    const name = useRef(null);
    const type = useRef(null);
    const balance = useRef(null);
    const submitButtonRef = useRef(null);
    const [res,setRes]=useState([]);

    const url=`http://localhost:2000`;

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    
    // State to manage the initial button state
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    const handleInputChange = () => {
      const Field1 = name.current.value;
      const Field2 = type.current.value;
      const Field3 = balance.current.value;
  
      setInput1(Field1);
      setInput2(Field2);
      setInput3(Field3)
      setIsButtonDisabled(Field1.trim() === '' || Field2.trim() === '' || Field3.trim() === '');
    };
  
    
    
    const postdata=async()=>{
        const data=await axios.post(url+`/post`,{
            name:name.current.value,
            type:type.current.value,
            balance:balance.current.value
        });
        getdata();
    }

    useEffect(() => {
      setIsButtonDisabled(true);
      getdata();
    }, []);

    const getdata=async ()=>{
        const data=await axios.get(url+`/get`);
        setRes(data.data);
    }

    const updatedata=async (accNo)=>{
        const data=await axios.put(url+`/update`,{accNo:accNo});
        getdata();
    }
  return (
    <>
    <Post>
      <input type="text" ref={name} placeholder='Name' onChange={handleInputChange}/><br/>
      <input type="text" ref={type} placeholder='Type' onChange={handleInputChange}/><br />
      <input type="text" ref={balance} placeholder='Balance' onChange={handleInputChange}/><br />
      <button type="button" onClick={postdata} ref={submitButtonRef} disabled={isButtonDisabled}>Submit</button>
    </Post>
      <Table>
      <table>
        <thead>
        <tr>
            <th>accNo</th>
            <th>name</th>
            <th>type</th>
            <th>status</th>
            <th>balance</th>
        </tr>
        </thead>
        <tbody>
          {
            res[0] ? (
              
                res.map((el)=>{
                  return(
                    <tr>
                      <td>{el.accNo}</td>
                      <td>{el.name}</td>
                      <td>{el.type}</td>
                      <td>{el.status}</td>
                      <td>{el.balance}</td>
                      <td>
                        <button onClick={()=>updatedata(el.accNo)}>edit</button>
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
      </Table>
    </>
  )
}

export default Task3

const Post=styled.div`
  position:absolute;
  top:20%;
  left:50%;
  transform:translate(-50%,-50%);
  border:1px solid white;
  padding:10px;
  margin:10px;
  border-radius:10px;
  background-color:#2b2f78aa;
  & input{
    padding:8px;
    margin:15px;
    border:none;
    border-bottom:1px solid white;
    background:none;
    outline:none;
  }
  & button{
    width:90%;
    margin:10px;
  }
`
const Table=styled.div`
  position:absolute;
  left:600px;
  & table{
    width: 100%;
    border: 1px solid #ddd;
    border-collapse: collapse;
    margin-bottom: 20px;
    cellpadding:10px;
  }
  & th{
    background-color: #608089aa;
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  & td{
    padding: 10px;
    border: 1px solid white;
  }
`