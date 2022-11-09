import React, { useState } from "react";
import PropTypes from "prop-types";
import loupe from "@assets/loupe.png";
import locationIcon from "@assets/localisation.png";
import axios from "axios";

function Search(props) {
  const { setVille } = props;
  const [city, setCity] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setVille(city);
  }
  function handleValidation() {
    navigator.geolocation.getCurrentPosition(function coucou(position) {
      if (position) {
        axios
          .get(
            `https://api-adresse.data.gouv.fr/reverse/?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
          )
          .then((response) => {
            const location =
              response.data.features["0"].properties.city.toLowerCase();
            setVille(location);
            setCity(location);
          });
      }
    });
  }
  return (
    <form className="nav-search" onSubmit={(e) => handleClick(e)}>
      <button type="button" className="positionAsk" onClick={handleValidation}>
        <img src={locationIcon} alt="Location Ask" />
      </button>
      <input
        name="city"
        value={city}
        className="search"
        type="text"
        placeholder="Recherche"
        onChange={(event) => setCity(event.target.value)}
      />
      <button
        type="button"
        className="searchButton"
        onClick={(e) => handleClick(e)}
      >
        <img src={loupe} alt="Chercher" />
      </button>
    </form>
  );
}
Search.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default Search;
