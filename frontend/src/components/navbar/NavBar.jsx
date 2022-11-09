import "../../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import logo from "../../assets/logo_find_fuel_white.png";

function NavBar(props) {
  const { setVille, eventFilterButton } = props;
  return (
    <header>
      <img className="icon" src={logo} alt="The logo" />
      <Search setVille={setVille} eventFilterButton={eventFilterButton} />
    </header>
  );
}
NavBar.propTypes = {
  setVille: PropTypes.func.isRequired,
  eventFilterButton: PropTypes.func.isRequired,
};
export default NavBar;
