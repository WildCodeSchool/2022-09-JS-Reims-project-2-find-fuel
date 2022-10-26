import React, { useState } from "react";

const geolocation =
  "https://api-adresse.data.gouv.fr/reverse/?lon=4.019932&lat=49.2571245";
function Search() {
  const [message, setMessage] = useState(geolocation);
  return (
    <div className="nav-search">
      <input
        className="search"
        type="text"
        placeholder="Recherche"
        onChange={(event) => setMessage(event.target.value)}
      />
      <p>returned data from input:{message}</p>
    </div>
  );
}
export default Search;
