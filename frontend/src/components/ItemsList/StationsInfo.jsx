import React from "react";
import "../../../style/itemsList.css";

function StationsInfo() {
  return (
    <div className="stationInfo">
      <h2 className="nameStation">Name Station</h2>
      <img
        className="imageFavorite"
        src="https://via.placeholder.com/20"
        alt="state"
      />
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
