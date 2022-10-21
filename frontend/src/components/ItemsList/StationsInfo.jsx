import React from "react";
import "../../../style/itemsList.css";

function StationInfo() {
  return (
    <section className="stationsInfo">
      <h2>Name Station</h2>
      <div className="favorite" />
      <img
        className="BrandsStation"
        src="https://via.placeholder.com/100"
        alt="images"
      />
      <section className="stateStation">
        <h2>6.8 Km</h2>
        <div>
          <h3>
            <img
              className="StateStation"
              src="https://via.placeholder.com/20"
              alt="state"
            />
            Ouvert
          </h3>
        </div>
      </section>
      <h3>adresse</h3>
    </section>
  );
}

export default StationInfo;
