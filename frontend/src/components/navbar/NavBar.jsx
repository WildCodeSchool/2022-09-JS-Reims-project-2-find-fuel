import "../../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

function NavBar(props) {
  const { setVille } = props;
  return (
    <header>
      <img className="icon" src={" "} alt="The logo" />
      <Search setVille={setVille} />
      <img className="icon1" src={" "} alt="Filter Icon" />
    </header>
  );
}
NavBar.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default NavBar;
