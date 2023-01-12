import React, { useState } from "react";
import "./Select.css";

const Select = ({
  options,
  placeholder,
  selectedOption: initialSelectedOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    initialSelectedOption || null
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-container">
      <select value={selectedOption} onChange={handleChange} className="select">
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option?.label}
          </option>
        ))}
      </select>
      <span className="arrow">▼</span>
    </div>
  );
};

export default Select;
