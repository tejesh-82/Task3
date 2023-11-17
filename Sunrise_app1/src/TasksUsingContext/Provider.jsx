import React, { useState } from 'react';
import global from './CreateContext';
import '../Tasks/Task4.css'
import Consumer from './Consumer';
const Provider = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [places,setPlaces]=useState([]);
  const [selectedFromPlace, setSelectedFromPlace] = useState('');
  const [selectedToPlace, setSelectedToPlace] = useState('');

  const CityChange = (e) => {
    setSelectedCity(e.target.value);
  
    switch (e.target.value) {
      case 'hyderabad':
        setPlaces(['ameerpet', 'kukatpally', 'miyapur', 'srnagar']);
        break;
      case 'delhi':
        setPlaces(['secundrabd', 'paradise', 'begumpet', 'nagole']);
        break;
      case 'chennai':
        setPlaces(['paradeground', 'mgbustand', 'raidurg', 'rasulpura']);
        break;
      default:
        setPlaces([]);
        break;
    }
    setSelectedFromPlace('');
    setSelectedToPlace('');
  };

  const FromPlaceChange = (event) => {
    const selectedPlace = event.target.value;
    setSelectedFromPlace(selectedPlace);
  };

  const ToPlaceChange = (event) => {
    setSelectedToPlace(event.target.value);
  };

  const contextValue={
    places,
    selectedFromPlace,
    selectedToPlace
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
     

     

      
      <div>
        <label>From:</label>
    
        <select onChange={FromPlaceChange} value={selectedFromPlace}>
            <option value="" disabled>Select a place</option>
            {places.map((place, index) => (
                <option key={index} value={place.toLowerCase().replace(' ', '-')}>
                    {place}
                </option>
            ))}
        </select>
        
      </div>
     
      <div>
        <label>To:</label>
    
        <select onChange={ToPlaceChange} value={selectedToPlace}>
          <option value="" disabled>Select a place</option>
          {places.filter(place => place !== selectedFromPlace) 
            .map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
        </select>
    
      </div>
      <global.Provider value={contextValue}>
        <Consumer />
      </global.Provider>
    </div>
</>
  );
};




export default Provider;