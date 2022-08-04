import React from "react";
import "./Body.css";
import Header from "./Header";
import { MdPlayCircleFilled, MdFavorite, MdMoreHoriz } from "react-icons/md";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    toast("Songs witll only PLAY if you a Spotify premium!");
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg"
          }
          alt="weekly image"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>
            {discover_weekly?.description
              ? discover_weekly?.description
              : "Your weekly mix-tape of fresh music. Enjoy new music and deep cuts picked for you"}
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <MdPlayCircleFilled
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <ToastContainer />
          <MdFavorite className="body__heart" fontSize="large-x" />
          <MdMoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
