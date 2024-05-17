import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ShowsContext from "../context/shows/showsContext";
import Loader from "../components/Loader";
import ListEpisodes from "../components/ListEpisodes";

const SingleShow = () => {
  const ratingStyle = (rating) => {
    if (rating >= 1 && rating < 5) {
      return "border-red-800";
    } else if (rating >= 5 && rating < 7) {
      return "border-yellow-400";
    } else if (rating >= 7 && rating < 10) {
      return "border-green-500";
    } else {
      return "border-slate-400";
    }
  };

  const removeTags = (text) => {
    if (text === null || text === "") {
      return "";
    } else {
      text = text.toString();
    }
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const { id } = useParams();
  const showsContext = useContext(ShowsContext);
  const { loading, getSingleShow, singleShow, episodes } = showsContext;
  console.log(id);
  useEffect(() => {
    getSingleShow(id);
  }, []);
  console.log(singleShow);

  return (
    <div className=" w-full pt-20 ">
      {loading ? (
        <Loader />
      ) : (
        <section className=" ">
          <div className="flex flex-col md:flex-row  gap-20 w-9/12 md:justify-center m-auto">
            <img
              className=" w-96 self-center  md:h-96  md:w-64 rounded-xl"
              src={
                singleShow.image
                  ? singleShow.image.original
                  : "https://img.freepik.com/vector-gratis/diseno-creativo-error-404_23-2147735309.jpg?w=826&t=st=1714948718~exp=1714949318~hmac=c0ee8a750ce667214fafb9b19cee251f354d98e92422987ee65e182e52ebc4ac"
              }
              alt=""
            />
            <div className="flex flex-col mt-10 ">
              <h2 className=" text-5xl text-slate-300">{singleShow.name}</h2>
              <div className="flex flex-row gap-11 mt-5 ms-1">
                <div className=" flex gap-3 ">
                  {singleShow.genres &&
                    singleShow.genres.map((genre) => (
                      <span key={genre} className="text-slate-300 text-lg">
                        {genre}
                      </span>
                    ))}
                </div>

                {singleShow.rating ? (
                  <div
                    className={`flex justify-center items-center text-center rounded-full  w-8 h-8 ${ratingStyle(
                      singleShow.rating.average
                    )}  border-2 bg-slate-800 bg-opacity-65 text-slate-300`}
                  >
                    <span className="text-slate-300 text-lg">
                      {singleShow.rating.average == null
                        ? 0
                        : singleShow.rating.average}
                    </span>
                  </div>
                ) : null}
                <span className="text-slate-300 text-lg ">
                  Status:
                  {singleShow.status ? " " + singleShow.status : "N/A"}
                </span>
              </div>
              {singleShow.summary ? (
                <p className=" lg:w-[50rem] mt-10  text-slate-300 md:mt-20 lg:mt-28">
                  {removeTags(singleShow.summary)}
                </p>
              ) : null}
            </div>
          </div>

          {episodes && <ListEpisodes episodes={episodes} />}
        </section>
      )}
    </div>
  );
};

export default SingleShow;
