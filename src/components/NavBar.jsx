import React, { useState } from "react";
// import { HiSearch } from "react-icons/hi";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trends";
import Favorite from "../pages/FavoritePage";
import DetailPage from "../pages/DetailPage";
import "../Styles/NavBar.css";

export const Containers = React.createContext();

function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <Containers.Provider value={{ toggle, inputValue }}>
      <nav className={toggle ? `` : "navBarColor"}>
        <h1 id={toggle ? `` : `heading`}>FILMKITA</h1>
        <NavLink
          to=""
          style={({ isActive }) => {
            return { color: isActive ? "#fff" : "#ee9b00" };
          }}
        >
          <span id={toggle ? `Movies` : `MoviesLight`}>Movies</span>
        </NavLink>
        <NavLink
          to="/TvShows"
          style={({ isActive }) => {
            return { color: isActive ? "#fff" : "#ee9b00" };
          }}
        >
          <span id={toggle ? `Movies` : `MoviesLight`}>TvShows</span>
        </NavLink>
        <NavLink
          to="/Trending"
          style={({ isActive }) => {
            return { color: isActive ? "#fff" : "#ee9b00" };
          }}
        >
          <span id={toggle ? `Movies` : `MoviesLight`}>Trending</span>
        </NavLink>
        <NavLink
          to="/Pricing"
          style={({ isActive }) => {
            return { color: isActive ? "#fff" : "#ee9b00" };
          }}
        >
          <span id={toggle ? `Movies` : `MoviesLight`}>Favorite</span>
        </NavLink>
        <div className="input-group">
          <input type="text" placeholder="Search your movies" onChange={(e) => setInputValue(e.target.value)} />
          {/* <HiSearch fontSize={21} color="green" id="search" /> */}
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div id={toggle ? `Color-switcher-mover` : `Color-switcher-moved`}></div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Movies />} />
        <Route path="TvShows" element={<TvShows />} />
        <Route path="Trending" element={<Trending />} />
        <Route path="Favorite" element={<Favorite />} />
        <Route path="/detailPage" element={<DetailPage />} />
      </Routes>
    </Containers.Provider>
  );
}

export default NavBar;
