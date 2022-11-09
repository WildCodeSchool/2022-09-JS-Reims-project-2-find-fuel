import "../../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import funnel from "@assets/funnel.png";
import Search from "./Search";
import logo from "../../assets/logo_find_fuel_white.png";

function NavBar(props) {
  const { setVille } = props;
  return (
    <header>
      <img className="icon" src={logo} alt="The logo" />
      <Search setVille={setVille} />
      <button className="button_filter" type="button">
        <img src={funnel} alt="FIltre" />
      </button>
    </header>
  );
}
NavBar.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default NavBar;
