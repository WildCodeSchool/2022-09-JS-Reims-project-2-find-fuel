import React from "react";
import "../../../style/itemsList.css";

function StationsInfo() {
  return (
    <div className="stationInfo">
      <figure className="nameStation">
        <h2>Name Station</h2>
        <figure className="favorite">
          <img
            className="imageFavorite"
            src="https://via.placeholder.com/20"
            alt="state"
          />
        </figure>
      </figure>
      <section className="imageAndState">
        <img
          className="imageStation"
          src="https://via.placeholder.com/100"
          alt="images"
        />
        <div className="stateStation">
          <figure>
            <img
              className="imageState"
              src="https://via.placeholder.com/20"
              alt="state"
            />
            <figcaption>6.8 KM</figcaption>
            <figcaption>Ouvert</figcaption>
          </figure>
        </div>
      </section>
      <div className="adressStation">
        <h3>adresse</h3>
      </div>
    </div>
  );
}

export default StationsInfo;
