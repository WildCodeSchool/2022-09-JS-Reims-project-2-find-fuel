import "../../../style/navbar.css";
import React from "react";
import Search from "./Search";
import essence from "./Image/logo_find_fuel.png";

function NavBar() {
  return (
    <header>
      <img className="icon" src={essence} alt="The logo" />
      <Search />
    </header>
  );
}
export default NavBar;
