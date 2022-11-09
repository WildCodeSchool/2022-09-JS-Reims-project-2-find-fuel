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
    navigator.geolocation.getCurrentPosition(function (position) {
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
      <button type="button" className="searchButton" onClick={(e) => handleClick(e)}>
        <img src={loupe} alt="Chercher" />
      </button>
      <button className="button_filter" type="button">
        Filtre
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />{" "}
        </svg>
      </button>
    </form>
  );
}
Search.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default Search;
