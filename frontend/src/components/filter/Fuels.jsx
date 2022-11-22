import React from "react";
import PropTypes from "prop-types";

const fuelList = [
  { nameFuel: "Diesel", isClicked: false },
  { nameFuel: "Ethanol E85", isClicked: false },
  { nameFuel: "SP98", isClicked: false },
  { nameFuel: "SP95 E5", isClicked: true },
  { nameFuel: "SP95 E10", isClicked: false },
  { nameFuel: "GPL", isClicked: false },
];

function Fuel(props) {
  const { nameFuel } = props;
  return (
    <li className="fuelElement">
      <h2>{nameFuel}</h2>
      <input type="checkbox" />
    </li>
  );
}

Fuel.propTypes = {
  nameFuel: PropTypes.string.isRequired,
};

function Fuels() {
  return (
    <ul className="container">
      {fuelList.map((fuel) => (
        <Fuel key={fuel.nameFuel} nameFuel={fuel.nameFuel} />
      ))}
    </ul>
  );
}
export default Fuels;
