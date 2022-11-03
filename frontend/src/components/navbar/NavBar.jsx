import "../../../style/navbar.css";
import React from "react";
import Search from "./Search";
import logo from "../../assets/logo_find_fuel_white.png";

function NavBar() {
  return (
    <header>
      <img className="icon" src={logo} alt="The logo" />
      <Search />
    </header>
  );
}
export default NavBar;
