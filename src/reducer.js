import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:
  //   "BQB5lBd7lcVurF8oxDXBcGNLbMF9jQAFhYym6zK1Fjfg2Pon3LF_Y8MZkCY4Lv_V4BLLx5YsefrgAjzmaXF-6ICIJ6iLLIPTESdLp3s67JCvxWoxwQYQUpc3wNrfR4vSVSWh7TTFa5CKmTR3uHGaF8QA_HajHO5bnpRmTzVDyv5QW15woSC2eyqhAp2-VuW5WOcuI3N57_Ln5Ht156Kg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
