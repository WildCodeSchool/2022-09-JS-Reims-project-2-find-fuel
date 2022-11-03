import React from "react";
import "../../../style/filter.css";
import Fuels from "./Fuels";
import Buttons from "./Buttons";

const notVisible = true;

function Filter() {
  return (
    <div
      className={notVisible ? "containerFilter notVisible" : "containerFilter"}
    >
      <Fuels />
      <Buttons />
    </div>
  );
}
export default Filter;
