import "../../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import locationIcon from "@assets/localisation.png";
import axios from "axios";
import Search from "./Search";
import FilterButton from "../filter/FilterButton";
import logo from "../../assets/logo_find_fuel_white.png";

function NavBar(props) {
  const { setCurrentPosition, setCity, eventFilterButton } = props;
  function handleValidation() {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        setCurrentPosition(position.coords);
        axios
          .get(
            `https://api-adresse.data.gouv.fr/reverse/?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
          )
          .then((response) => {
            const location =
              response.data.features["0"].properties.city.toLowerCase();
            setCity(location);
          });
      }
    });
  }
  return (
    <header>
      <img className="icon" src={logo} alt="The logo" />
      <button type="button" className="positionAsk" onClick={handleValidation}>
        <img src={locationIcon} alt="Location Ask" />
      </button>
      <Search eventFilterButton={eventFilterButton} setCity={setCity} />
      <FilterButton eventFilterButton={eventFilterButton} />
    </header>
  );
}
NavBar.propTypes = {
  setCurrentPosition: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  eventFilterButton: PropTypes.func.isRequired,
};
export default NavBar;
