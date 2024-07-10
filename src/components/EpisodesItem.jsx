import React from "react";

const EpisodesItem = ({ image, summary, name, number }) => {
  const removeTags = (text) => {
    if (text === null || text === "") {
      return "";
    } else {
      text = text.toString();
    }
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const reduceText = (text) => {
    if (text.length > 113) {
      const finalText = text.substring(0, 110);
      return finalText + "...";
    } else {
      return text;
    }
  };

  return (
    <div className=" w-48 h-36 md:w-96 md:h-72 snap-center hover:bg-slate-600 rounded-lg  ">
      <img
        className=" w-96 h-48 rounded-t-lg"
        loading="lazy"
        src={image ? image : ""}
        alt=""
      />
      <p className=" w-48 md:w-96 font-bold text-slate-300">
        E{number}:{name ? name : ""}
      </p>
      <p className=" w-48 md:w-96 text-xs md:text-sm text-slate-300">
        {summary ? reduceText(removeTags(summary)) : ""}
      </p>
    </div>
  );
};

export default EpisodesItem;
