import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { BiLibrary, BiHomeAlt, BiSearch } from "react-icons/bi";
import { useDataLayerValue } from "./DataLayer";
function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-icon here"
      />
      <SidebarOptions Icon={BiHomeAlt} title="Home" />
      <SidebarOptions Icon={BiSearch} title="Search" />
      <SidebarOptions Icon={BiLibrary} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
