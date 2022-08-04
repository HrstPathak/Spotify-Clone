import React from "react";
import "./Header.css";
import Avatar from "react-avatar";
import { BiSearch } from "react-icons/bi";
import { useDataLayerValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header_right">
        <Avatar
          className="avatar"
          src={
            user?.images[0].url
              ? user?.images[0].url
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461__340.png"
          }
        />
        <span>{user ? user.display_name : "User Name"}</span>
      </div>
    </div>
  );
}

export default Header;
