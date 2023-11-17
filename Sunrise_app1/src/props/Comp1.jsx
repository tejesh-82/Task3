import React, { useState } from 'react';

// ChildComponent receives data through props
const ChildComponent = ({ names, index, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    firstSelected: names[0],
    secondSelected: names[0],
  });

  const handleSelectChange = (event) => {
    const { value } = event.target;

    // Update the selected option based on the index
    if (index === 0) {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        firstSelected: value,
      }));
    } else {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        secondSelected: value,
      }));
    }

    // Notify the parent component about the selection change
    onSelectionChange(selectedOptions);
  };

  return (
    <div>
      <h2>Child Component {index + 1}</h2>
      {/* Select tag to choose a name from the array */}
      <label>Select a name: </label>
      <select value={index === 0 ? selectedOptions.firstSelected : selectedOptions.secondSelected} onChange={handleSelectChange}>
        {names.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <p>Selected Name: {index === 0 ? selectedOptions.firstSelected : selectedOptions.secondSelected}</p>
    </div>
  );
};

// ParentComponent passes the array of names to ChildComponent two times
const ParentComponent = () => {
  const names = ["John", "Doe", "Alice", "Bob"];

  const handleSelectionChange = (selectedOptions) => {
    console.log("Selection changed:", selectedOptions);
    // You can do something with the selected options here
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Render ChildComponent with the array of names the first time */}
      <ChildComponent names={names} index={0} onSelectionChange={handleSelectionChange} />

      {/* Render ChildComponent with the array of names the second time */}
      <ChildComponent names={names} index={1} onSelectionChange={handleSelectionChange} />
    </div>
  );
};

export default ParentComponent;
