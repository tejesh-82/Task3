
import React, { useContext, useState } from 'react';
import {global} from './Context';
import '../Tasks/Task4.css'
import {Places} from './Places';
import Ticket from './Ticket';

const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const CityChange = (e) => {
    setSelectedCity(e.target.value);
  }
  return (
    <>
      <div className='container'>
        <label>Select a City:</label>
      
      <select name="city" onChange={CityChange} value={selectedCity}>
        <option value="" disabled>Select a city</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="delhi">Delhi</option>
        <option value="chennai">Chennai</option>
      </select>
    </div>

    <global.Provider value={selectedCity}>
        <Places />
        <Ticket />
    </global.Provider>

</>
  );
};


export default City;