import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext";

import Loader from "../components/Loader";

import SearchBar from "../components/SearchBar";
import ListItem from "../components/ListItem";
import React from "react";

const Home = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  return (
    <div>
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 w-9/12 mx-auto my-4">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              name={item.show.name}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://img.freepik.com/vector-gratis/diseno-creativo-error-404_23-2147735309.jpg?w=826&t=st=1714948718~exp=1714949318~hmac=c0ee8a750ce667214fafb9b19cee251f354d98e92422987ee65e182e52ebc4ac"
              }
              rating={item.show.rating.average ? item.show.rating.average : "0"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
