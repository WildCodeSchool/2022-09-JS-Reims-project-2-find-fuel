import React, { useState } from "react";
import "../../../style/itemsList.css";
import fullStar from "@assets/fullstar.png";
import emptyStar from "@assets/emptystar.png";

function StationsInfo() {
  const [isfavorite, setIsFavorite] = useState(false);
  function handleFavorite() {
    return setIsFavorite(!isfavorite);
  }
  return (
    <div className="stationInfo">
      <h2 className="nameStation">Name Station</h2>
      <button type="button" onClick={handleFavorite}>
        <img
          className={isfavorite ? "isFavorite" : "notFavorite"}
          src={isfavorite ? fullStar : emptyStar}
          alt="favorite"
        />
      </button>

      <p className="stateStation">6.8 KM</p>
      <p>
        <span className="circleColor" />
        Ouvert
      </p>
      <h3 className="adressStation">adresse</h3>
    </div>
  );
}

export default StationsInfo;
