import React from "react";
import PropTypes from "prop-types";
import "../../../style/filter.css";

const listFuels = [
  { nameFuel: "gasoil", isClicked: false },
  { nameFuel: "gasoil +", isClicked: false },
  { nameFuel: "E98", isClicked: false },
  { nameFuel: "E95", isClicked: true },
];

function Fuel(props) {
  const { nameFuel } = props;
  return (
    <div className="fuelElement">
      <h2>{nameFuel}</h2>
      <input type="checkbox" />
    </div>
  );
}

Fuel.propTypes = {
  nameFuel: PropTypes.string.isRequired,
};

function Fuels() {
  return (
    <div className="conteneur">
      {listFuels.map((fuel, index) => (
        <Fuel index={index} nameFuel={fuel.nameFuel} />
      ))}
    </div>
  );
}
export default Fuels;
