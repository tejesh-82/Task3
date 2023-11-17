
import React, { useContext, useState } from 'react';
import {global} from './Context';
import '../Tasks/Task4.css'
import {Places} from './Places';
import Ticket from './Ticket';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const CityChange = (e) => {
    setSelectedCity(e.target.value);
  }
  return (
    <>
      
        {/* <label>Select a City:</label>
      
      <select name="city" onChange={CityChange} value={selectedCity}>
        <option value="" disabled>Select a city</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="delhi">Delhi</option>
        <option value="chennai">Chennai</option>
      </select> */}

      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel>Select City</InputLabel>
        <Select name="city" value={selectedCity} onChange={CityChange}>
          <MenuItem value="hyderabad">Hyderabad</MenuItem>
          <MenuItem value="delhi">delhi</MenuItem>
          <MenuItem value="chennai">chennai</MenuItem>
        </Select>
      </FormControl>
  


    <global.Provider value={selectedCity}>
        <Places />
        <Ticket />
    </global.Provider>

</>
  );
};


export default City;