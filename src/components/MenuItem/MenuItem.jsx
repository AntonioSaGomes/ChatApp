import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

export default function MenuItem({ menuItem, isVisible }) {
  const { onClick } = menuItem;

  const clickLink = () => {
    if (onClick != null) {
      onClick().then((user) => {
        console.log(user);
      });
    }
  };

  return (
    <Link
      onClick={() => {
        clickLink();
      }}
      to={menuItem.path}
    >
      <div className={`menu-item ${!isVisible ? "hidden" : ""} clickable`}>
        <img className="icon" src={menuItem.imgSrc} alt="" />
        {isVisible && <span className="bold ">{menuItem.name}</span>}
      </div>
    </Link>
  );
}
