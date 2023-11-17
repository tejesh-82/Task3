import React, { useState } from 'react';
import './Task4.css'
const Task4 = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedFromPlace, setSelectedFromPlace] = useState('');
  const [selectedToPlace, setSelectedToPlace] = useState('');

  const handleCityChange = (e) => {
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

  const handleFromPlaceChange = (event) => {
    const selectedPlace = event.target.value;
    setSelectedFromPlace(selectedPlace);
  };

  const handleToPlaceChange = (event) => {
    setSelectedToPlace(event.target.value);
  };

  const getprice=()=>{
    let from;
    let to;
    for(let i=0;i<places.length;i++){
        let place=places[i];
        if(place==selectedFromPlace){
            from=i;
        }
        else if(place==selectedToPlace){
            to=i;
        }
    }
    let ticket=to-from;
    if(ticket>0){
        console.log(ticket*25);
    }
    else{
        console.log(Math.abs(ticket)*25)
    }
  }

  return (
    <div className='container'>
      <label>Select a City:</label>
      <select id="city" name="city" onChange={handleCityChange} value={selectedCity}>
        <option value="" disabled>Select a city</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="delhi">Delhi</option>
        <option value="chennai">Chennai</option>
      </select>

      <div>
        <label>From:</label>
        <select onChange={handleFromPlaceChange} value={selectedFromPlace}>
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
        <select onChange={handleToPlaceChange} value={selectedToPlace}>
          <option value="" disabled>Select a place</option>
          {places.filter(place => place !== selectedFromPlace) 
            .map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
        </select>
      </div>
          
      <div><button onClick={getprice}>Get</button></div>
    </div>
  );
};

export default Task4;



