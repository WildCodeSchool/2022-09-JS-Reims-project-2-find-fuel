import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationsInfo from "./StationsInfo";

function Station() {
  return (
    <div className="station">
      <StationsInfo />
      <FuelListing />
    </div>
  );
}

export default Station;
