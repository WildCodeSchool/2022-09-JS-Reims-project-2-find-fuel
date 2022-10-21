import React from "react";
import "../../../style/filter.css";
import Fuels from "./Fuels";
import Buttons from "./Buttons";
import Brands from "./Brands";

function Filter() {
  return (
    <div>
      <Fuels />
      <Buttons />
      <Brands />
    </div>
  );
}
export default Filter;
