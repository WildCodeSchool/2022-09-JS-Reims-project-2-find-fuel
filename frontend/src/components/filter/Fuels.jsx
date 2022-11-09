import React from "react";
import PropTypes from "prop-types";
import "../../../style/filter.css";

const fuelList = [
  { nameFuel: "gasoil", isClicked: false },
  { nameFuel: "gasoil +", isClicked: false },
  { nameFuel: "E98", isClicked: false },
  { nameFuel: "E95", isClicked: true },
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
