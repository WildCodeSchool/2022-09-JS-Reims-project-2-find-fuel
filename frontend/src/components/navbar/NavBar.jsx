import "../../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import essence from "./Image/logo_find_fuel.png";
import filter from "./Image/filter.png";

function NavBar(props) {
  const { setVille } = props;
  return (
    <header>
      <img className="icon" src={essence} alt="The logo" />
      <Search setVille={setVille} />
      <img className="icon1" src={filter} alt="Filter Icon" />
    </header>
  );
}
NavBar.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default NavBar;
