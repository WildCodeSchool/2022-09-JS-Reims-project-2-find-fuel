import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationInfo from "./StationsInfo";

function Station() {
  return (
    <div className="station">
      <StationInfo />
      <FuelListing />
    </div>
  );
}

export default Station;
