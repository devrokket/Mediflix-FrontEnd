import React from "react";
import "../assets/styles/sidebar-left-item.css";

function SidebarLeftItem(props) {
  const { menu, isActive } = props;

  return (
    <div className={`sidebar-left-item ${isActive ? "active" : ""}`}>    
      <img src={menu.image} alt={menu.name} />
      <span>{menu.name}</span>
    </div>
  );
}

export default SidebarLeftItem;