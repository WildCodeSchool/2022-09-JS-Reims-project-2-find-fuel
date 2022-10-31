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
    </form>
  );
}
Search.propTypes = {
  setVille: PropTypes.func.isRequired,
};
export default Search;
