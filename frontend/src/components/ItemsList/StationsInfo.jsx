import React from "react";
import "../../../style/itemsList.css";

function StationsInfo() {
  return (
    <section className="stationInfo">
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
    </section>
  );
}

export default StationsInfo;
