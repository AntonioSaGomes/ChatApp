import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  const { text } = props;

  return (
    <div className="tooltip-container">
      <span
        className="tooltip-trigger"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {props.children}
      </span>
      {visible && (
        <div
          className="tooltip-overlay"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <div className="tooltip-text">{text}</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
