import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Locationselect = ({ names, onSelectionChange }) => {
  const [selectedName, setSelectedName] = useState('');

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
    onSelectionChange(event.target.value);
  };

  return (
  <>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel>Select place</InputLabel>
        <Select name="city" onChange={handleSelectChange}>
        {
            names.map((element,index)=>{
              return <MenuItem value={element}>{element}</MenuItem>
            })
          }
        </Select>
      </FormControl>
      </>
  );
};

export default Locationselect