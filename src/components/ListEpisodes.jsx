import { useState } from "react";
import EpisodesItem from "./EpisodesItem";
import ShowsContext from "../context/shows/showsContext";

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
  /* const showsContext = useContext(ShowsContext);
  const { loading, getSingleShow, singleShow, episodes } = showsContext; */
  return (
    <div className=" w-10/12 h-40 mx-auto mt-5 ">
      <div className="  h-20 w-full flex  ">
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
      <div className=" w-full  h-80 overflow-x-scroll flex gap-9">
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
    </div>
  );
};

export default ListEpisodes;
