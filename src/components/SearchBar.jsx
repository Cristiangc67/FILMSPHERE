import React, { useState, useContext } from "react";
import showsContext from "../context/shows/showsContext";
import Alert from "./Alert";
import AlertsContext from "../context/alerts/alertsContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { searchShows } = useContext(showsContext);
  const { alert, setAlert } = useContext(AlertsContext);

  const searchHandler = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Escribe algo por favor", "danger");
    } else {
      searchShows(search);
    }

    console.log("buscando:" + search);
  };

  return (
    <div className="my-10 px-10 md:px-32  w-full">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

      <form className=" w-full flex flex-col gap-5 " action="">
        <input
          className=" bg-slate-300 text-lg rounded-xl px-3 py-1 outline-none "
          type="text"
          placeholder="Buscar series"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className=" bg-indigo-600 hover:bg-indigo-700 transition-all  font-bold rounded-full text-xl md:mx-40 py-1 text-zinc-100 "
          onClick={searchHandler}
        >
          BUSCAR
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
