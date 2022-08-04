import React from "react";
import "./SidebarOption.css";
function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <span>{title}</span> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOptions;
