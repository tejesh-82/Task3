import React, { useState } from 'react';
import Comp1 from './props/Comp1';
// Main App Component
const App = () => {
  const [selectedValues1, setSelectedValues1] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);

  const handleSelect = (instance, value) => {
    if (instance === 1) {
      setSelectedValues1((prevValues) => [...prevValues, value]);
    } else if (instance === 2) {
      setSelectedValues2((prevValues) => [...prevValues, value]);
    }
  };

  return (
    <div>
      {/* Render ComponentOne */}
      <Comp1 sendArrayToComponentTwo={handleSelect} />
      <h2>Selected Values for ComponentTwo #1</h2>
      {/* Display the selected values for ComponentTwo #1 */}
      <ul>
        {selectedValues1.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h2>Selected Values for ComponentTwo #2</h2>
      {/* Display the selected values for ComponentTwo #2 */}
      <ul>
        {selectedValues2.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
