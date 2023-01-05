import React, { useState } from "react";
import MenuItem from "../MenuItem";
import "./MenuItemGroup.css";

export default function MenuItemGroup({ menuItemGroup, isVisible }) {
  const [collapsed, setCollapsed] = useState(true);

  const { groupName, menuItems, imgSrc } = menuItemGroup;

  return (
    <div
      className={`menu-item-group ${!isVisible ? "hidden" : ""} clickable`}
      onClick={() => setCollapsed(!collapsed)}
    >
      <div className={`menu-item ${!isVisible ? "hidden" : ""} clickable`}>
        <img className="icon" src={imgSrc} alt="" />
        {isVisible && <span className="bold ">{groupName}</span>}
      </div>
      <div className={`menu-item-group-items ${collapsed ? "collapsed" : ""}`}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            menuItem={menuItem}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}
