import React from "react";
import "../../../style/itemsList.css";
import FuelItem from "./FuelItem";

function FuelListing() {
  return (
    <div className="fuelListing">
      <FuelItem />
      <FuelItem />
      <FuelItem />
      <FuelItem />
      <FuelItem />
      <FuelItem />
    </div>
  );
}
export default FuelListing;
