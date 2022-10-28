import React from "react";
import "../../../style/filter.css";
import Fuels from "./Fuels";
import Buttons from "./Buttons";

function Filter() {
  return (
    <div className="containerFilter">
      <Fuels />
      <Buttons />
    </div>
  );
}
export default Filter;
