import React from "react";
import "../assets/styles/sidebar-right.css";

function SidebarRightItem({ menu, extra }) {
  return (
    <div className="sidebar-right-item">
      <p>{menu.name}</p>
       {extra && <div className="sidebar-right-item-extra">{extra}</div>}
    </div>
  );
}

export default SidebarRightItem;