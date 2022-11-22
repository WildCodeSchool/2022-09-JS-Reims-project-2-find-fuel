import React from "react";

function Buttons() {
  return (
    <div className="buttonContainer">
      <button type="button" className="filterButtons">
        Le moins cher
      </button>
      <button type="button" className="ButtonDistance">
        le plus proche
      </button>
    </div>
  );
}

export default Buttons;
