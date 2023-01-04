import React from "react";

const Label = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
    </label>
  );
};

export default Label;
