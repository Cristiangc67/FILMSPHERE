import { useState, useRef } from "react";
import EpisodesItem from "./EpisodesItem";
import ShowsContext from "../context/shows/showsContext";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/right-arrow.svg";

const ListEpisodes = ({ episodes }) => {
  const [seasonOption, setSeasonOption] = useState(1);
  const handleChange = (event) => {
    setSeasonOption(event.target.value);
  };

  const seasonEpisodes = episodes
    ? episodes.filter((episode) => episode.season == seasonOption)
    : null;

  const seasons = episodes[episodes.length - 1]
    ? episodes[episodes.length - 1].season
    : "";
  console.log(seasonEpisodes);

  const getSeasons = (seasons) => {
    const seasonsArray = [];
    for (let i = 0; i < seasons; i++) {
      console.log(i);
      seasonsArray.push(
        <option
          value={i + 1}
          key={i}
          className="  w-32 h-3  bg-slate-900 text-nowrap text-start  rounded-b-lg"
          onClick={() => setSeasonOption(i + 1)}
        >
          Season {i + 1}
        </option>
      );
    }
    return seasonsArray;
  };
  //scroll control
  const listScrollRef = useRef(null);
  const scrollLeft = () => {
    listScrollRef.current.scrollBy({
      top: 0,
      left: -500,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    listScrollRef.current.scrollBy({
      top: 0,
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className=" w-11/12 md:w-10/12 h-full mx-2 my-2 ">
      <div className="  h-20 w-full flex flex-col md:flex-row md:ms-28  ">
        {/* <div className=" bg-red-300 w-20 h-8 text-center rounded-b-lg">
          Season
        </div> */}
        {episodes ? (
          <select
            className=" px-5 h-11 bg-slate-800 bg-opacity-50 rounded-lg text-slate-300"
            onChange={handleChange}
          >
            {getSeasons(seasons)}
          </select>
        ) : (
          ""
        )}
      </div>
      <div className="h-80 w-full flex ">
        {episodes ? (
          <div
            id="arrowLeft"
            className="w-12 md:w-20 h-48 hidden md:block hover:cursor-pointer transition-all duration-300  hover:scale-110"
            onClick={scrollLeft}
          >
            <img src={arrowLeft} className="h-full w-full " alt="" />
          </div>
        ) : (
          ""
        )}

        <div
          id="listScroll"
          className="w-full h-full px-1 snap-y md:snap-x snap-mandatory flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll gap-9"
          ref={listScrollRef}
        >
          {episodes
            ? seasonEpisodes.map((episode) => {
                return (
                  <EpisodesItem
                    image={episode.image ? episode.image.medium : ""}
                    summary={episode.summary ? episode.summary : ""}
                    name={episode.name ? episode.name : ""}
                    number={episode.number ? episode.number : ""}
                  />
                );
              })
            : ""}
        </div>
        {episodes ? (
          <div
            id="arrowRight"
            className="w-12 md:w-20 h-48 hidden md:block hover:cursor-pointer transition-all duration-300  hover:scale-110"
            onClick={scrollRight}
          >
            <img src={arrowRight} className="h-full w-full  " alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListEpisodes;
