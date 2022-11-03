import React, { useState } from "react";
import PropTypes from "prop-types";

function Search(props) {
  const { setVille } = props;
  const [city, setCity] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setVille(e.target.city.value);
  }
  return (
    <form className="nav-search" onSubmit={(e) => handleClick(e)}>
            <input
        name="city"
        value={city}
        className="search"
        type="text"
        placeholder="Recherche"
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="button">Chercher</button>
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
