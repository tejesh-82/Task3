import React, { useContext } from 'react';
import { useEffect } from 'react';
import { global } from './Context';
const Selectplace = React.memo(({ onDataReceive}) => {
    const CityName=useContext(global);
    let arr;
    switch(CityName){
        case 'hyderabad':
            arr=['a','b','c'];
            break;
        case 'delhi':
            arr=['x','y','z'];
            break;
        case 'chennai':
            arr=['1','2','3'];
            break;
        default:
            arr=[];
            break;
    }
  useEffect(() => {
    onDataReceive(arr);
  }, [CityName]);

  return (
    <>
      
    </>
  );
});

export default Selectplace;
