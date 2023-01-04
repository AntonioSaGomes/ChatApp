import React, { useState } from "react";
import "./Switch.css";

const Switch = (props) => {
  const [checked, setChecked] = useState(props.checked || false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
