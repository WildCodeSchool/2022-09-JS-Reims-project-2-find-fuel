import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationInfo from "./StationsInfo";

function Station() {
  return (
    <div className="station">
      <StationInfo />
      <div className="eltListing">
        <FuelListing />
      </div>
    </div>
  );
}

export default Station;
