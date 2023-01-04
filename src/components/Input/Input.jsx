import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, width = "100%" }) => {
  return (
    <div className="input-container" style={{ width: width }}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
