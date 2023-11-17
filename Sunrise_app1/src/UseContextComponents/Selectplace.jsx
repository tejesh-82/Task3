import React, { useContext } from 'react';
import { useEffect } from 'react';
import { global } from './Context';
const Selectplace = () => {
    const CityName=useContext(global);
    if(CityName=='hyderabad'){
      return ['a','b','c'];
    }
    else if(CityName=='chennai'){
      return ['x','y','z'];
    }
    else if(CityName=='chennai'){
      return ['1','2','3'];
    }
    else{
      return []
    }

  return (
    <>
      
    </>
  );
};

export default Selectplace;
