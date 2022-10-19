import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationInfo from "./StationsInfo";

function FuelItems() {
  return (
    <div className="fuelItems">
      <div>
        <StationInfo />
      </div>
      <div className="fuelListing">
        <FuelListing />
        <FuelListing />
        <FuelListing />
        <FuelListing />
        <FuelListing />
        <FuelListing />
      </div>
    </div>
  );
}

export default FuelItems;
