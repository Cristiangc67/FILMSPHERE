import axios from "axios";
import { useReducer } from "react";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";

import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

import React from "react";
import SingleShow from "../../pages/SingleShow";

const ShowState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    episodes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (search) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );
    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    const dataEpisodes = await axios.get(
      `https://api.tvmaze.com/shows/${id}/episodes`
    );
    /* console.log(data);
    console.log("esto es:" + dataEpisodes.data); */
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
      episodes: dataEpisodes.data,
    });
  };

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        episodes: state.episodes,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowState;
