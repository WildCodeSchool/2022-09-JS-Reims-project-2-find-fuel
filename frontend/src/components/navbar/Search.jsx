import React, { useRef } from "react";
import PropTypes from "prop-types";
import loupe from "@assets/loupe.png";

function Search(props) {
  const { setCity } = props;
  const inputRef = useRef();

  function handleClick(e) {
    e.preventDefault();
    setCity(inputRef.current.value);
  }

  return (
    <form className="nav-search" onSubmit={(e) => handleClick(e)}>
      <input
        name="city"
        ref={inputRef}
        className="search"
        type="text"
        placeholder="Recherche"
      />
      <button type="submit" className="searchButton">
        <img src={loupe} alt="Chercher" />
      </button>
    </form>
  );
}
Search.propTypes = {
  setCity: PropTypes.func.isRequired,
};
export default Search;
