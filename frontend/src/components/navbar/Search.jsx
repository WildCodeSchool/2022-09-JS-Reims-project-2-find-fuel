import React, { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  return (
    <div className="nav-search">
      <input
        value={city}
        className="search"
        type="text"
        placeholder="Recherche"
        onChange={(event) => setCity(event.target.value)}
      />
    </div>
  );
}
export default Search;
