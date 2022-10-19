import React from "react";

function StationInfo() {
  return (
    <div>
      <h2>Name Station</h2>
      <img
        className="BrandsStation"
        src="https://via.placeholder.com/50"
        alt="images"
      />
      <h3>adresse</h3>
      <h2>6.8 Km</h2>
      <div>
        <img
          className="StateStation"
          src="https://via.placeholder.com/20"
          alt="state"
        />
        <h3>Ouvert</h3>
      </div>
    </div>
  );
}

export default StationInfo;
