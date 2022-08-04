import React, { useEffect } from "react";
import "./Footer.css";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdShuffle,
  MdRepeat,
  MdPlayCircleOutline,
  MdPlaylistPlay,
  MdPauseCircleOutline,
  MdVolumeDown,
} from "react-icons/md";
import { Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer__albumLogo"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_PH_I6YOlhygka_a1agR-hghASjXBi3JCQ&usqp=CAU"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {/* <div className="footer__songInfo"> */}
        {/* <h4>Devil</h4>
          <p>Siddhu Moosewala</p>
        </div> */}
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <span>No song is playing</span>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer_center">
        <MdShuffle className="footer__green" />
        <MdSkipPrevious onClick={skipNext} className="footer__icon" />

        {playing ? (
          <MdPauseCircleOutline
            onClick={handlePlayPause}
            fontSize="xx-large"
            className="footer__icon"
          />
        ) : (
          <MdPlayCircleOutline
            onClick={handlePlayPause}
            fontSize="xx-large"
            className="footer__icon"
          />
        )}
        <MdSkipNext onClick={skipPrevious} className="footer__icon" />
        <MdRepeat className="footer__green" />
      </div>
      <div className="footer_right">
        <Row>
          <Col sm={2}>
            <MdPlaylistPlay className="playlist_button" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
