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
    <div className=" w-full h-full md:w-96 md:h-72 p-2 flex items-center md:block snap-center hover:bg-slate-600 rounded-lg hover:cursor-pointer ">
      <img
        className=" w-24 h-full md:w-96 md:h-48 rounded-md"
        loading="lazy"
        src={image ? image : ""}
        alt=""
      />
      <div className="ms-2 md:ms-0">
        <p className=" w-full md:w-96 font-bold text-base text-slate-300  ">
          E{number}:{name ? name : ""}
        </p>
        <p className=" w-full md:w-96 text-xs mt-2 text-slate-300">
          {summary ? reduceText(removeTags(summary)) : ""}
        </p>
      </div>
    </div>
  );
};

export default EpisodesItem;
