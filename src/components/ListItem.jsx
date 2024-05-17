import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
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
  return (
    <Link
      to={`/singleshow/${id}`}
      className="z-[10] relative inline-block m-auto w-60 rounded-xl  hover:scale-105 transition-all"
    >
      <div
        className={`flex justify-center items-center text-center rounded-full absolute w-8 h-8 ${ratingStyle(
          rating
        )}  border-2 bg-slate-800 bg-opacity-65 text-slate-300 top-2 left-2`}
      >
        <span>{rating}</span>
      </div>
      <img src={image} alt={name} className=" rounded-lg h-[21rem] " />
      <div className="flex flex-col text-start ps-1 py-2">
        <span className="text-xl font-bold text-slate-300">{name}</span>
      </div>
    </Link>
  );
};

export default ListItem;
