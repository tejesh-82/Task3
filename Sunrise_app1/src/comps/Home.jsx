import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import Update from './Update'
import {Link, Route, Routes} from 'react-router-dom'
import Post from './Post'
const Home = () => {
  return (
    <>
    <Tejesh>
      <Link to="/">VIEW</Link>
      <Link to="/post">POST</Link>
      <Link to="/update">UPDATE</Link>
    </Tejesh>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/post' element={<Post></Post>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
      </Routes>
    
    </>
  )
}

export default Home;
const Tejesh=styled.div`
    position:absolute;
    top:20%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    gap:20px;
`;