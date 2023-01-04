import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" data-testid="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
