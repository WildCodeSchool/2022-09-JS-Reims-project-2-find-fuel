import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterButton from "../filter/FilterButton";

function Search(props) {
  const { setVille, eventFilterButton } = props;
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
      <FilterButton eventFilterButton={eventFilterButton} />
    </form>
  );
}
Search.propTypes = {
  setVille: PropTypes.func.isRequired,
  eventFilterButton: PropTypes.func.isRequired,
};
export default Search;
