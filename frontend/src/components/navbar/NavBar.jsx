import "../../../style/navbar.css";
import React from "react";
import Search from "./Search";
import essence from "./Image/logo_find_fuel.png";
import filter from "./Image/filter.png";

function NavBar() {
  return (
    <header>
      <img className="icon" src={essence} alt="The logo" />
      <Search />
      <img className="icon1" src={filter} alt="Filter Icon" />
    </header>
  );
}
export default NavBar;
