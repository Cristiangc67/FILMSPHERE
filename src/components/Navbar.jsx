import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [desplegado, setdesplegado] = useState(false);

  return (
    <nav className=" z-20 sticky top-0 left-0 w-full md:px-10 py-4 px-7 md:flex content-center justify-between items-center m-auto bg-indigo-500">
      <div className="text-zinc-100 flex z-10 text-2xl cursor-pointer items-center gap-2">
        <Link className="staatliches-regular" to="/">
          FILMSPHERE
        </Link>
      </div>
      <div
        onClick={() => setdesplegado(!desplegado)}
        className="w-7 h-7 absolute right-8 top-5 md:hidden cursor-pointer "
      >
        {desplegado ? <FaXmark size={30} /> : <FaBarsStaggered size={30} />}
      </div>
      <ul
        className={`md:flex pl-9 md:pl-0 md:items-center absolute md:static md:pb-0 pb-12 md:z-20 md:rigth-auto left-0 w-full md:w-auto transition-all bg-indigo-500 ease-in duration-300 ${
          desplegado ? "top-12" : "top-[-490px]"
        } `}
      >
        {Links.map((item) => (
          <li
            key={item.name}
            className={`font-semibold hover:text-slate-800 my-7 md:my-0 md:ml-8 text-zinc-100 `}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
