import React from "react";
import "../../../style/itemsList.css";

function StationInfo() {
  return (
    <div className="stationInfo">
      <section className="nameStation">
        <h2>Name Station</h2>
        <div className="favorite">
          <img
            className="imageFavorite"
            src="https://via.placeholder.com/20"
            alt="state"
          />
        </div>
      </section>
      <section className="imageAndState">
        <img
          className="imageStation"
          src="https://via.placeholder.com/100"
          alt="images"
        />
        <div className="stateStation">
          <h2>6.8 Km</h2>
          <h3>
            <img
              className="imageState"
              src="https://via.placeholder.com/20"
              alt="state"
            />
            Ouvert
          </h3>
        </div>
      </section>
      <div className="adressStation">
        <h3>adresse</h3>
      </div>
    </div>
  );
}

export default StationInfo;
