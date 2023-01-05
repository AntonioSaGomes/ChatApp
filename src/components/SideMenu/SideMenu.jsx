import React, { useState } from "react";
import "./SideMenu.css";
import { menuItemGroup, menuItems } from "../../mocks/testData";
import MenuItem from "../MenuItem/MenuItem";
import MenuItemGroup from "../MenuItem/MenuItemGroup/MenuItemGroup";
export default function SideMenu() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`side-menu ${isVisible ? "hidden" : ""}`}>
      <div className="side-menu-header clickable" onClick={toggleSidebar}>
        <img className="icon" src="/icons/open-menu.svg"></img>
      </div>
      <div
        className={`side-menu-content ${
          isVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        {menuItems.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.name}
              menuItem={menuItem}
              isVisible={isVisible}
            />
          );
        })}
        <MenuItemGroup menuItemGroup={menuItemGroup} isVisible={isVisible} />
      </div>
    </div>
  );
}
