import React from "react";
import "../../../style/filter.css";

function Buttons() {
  return (
    <div className="buttonContainer">
      <button type="button" className="filterButtons">
        Le moins cher
      </button>
      <button type="button" className="filterButtons">
        Le plus proche
      </button>
      <button type="button" className="filterButtons">
        Favoris
      </button>
    </div>
  );
}

export default Buttons;
