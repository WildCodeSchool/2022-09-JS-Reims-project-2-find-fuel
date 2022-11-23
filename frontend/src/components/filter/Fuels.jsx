import React from "react";
import PropTypes from "prop-types";

const fuelList = [
  { nameFuel: "Gazole", id: 1 },
  { nameFuel: "Ethanol E85", id: 3 },
  { nameFuel: "SP98 E5", id: 6 },
  { nameFuel: "SP95 E5", id: 2 },
  { nameFuel: "SP95 E10", id: 5 },
  { nameFuel: "GPLc", id: 4 },
];

function Fuel({ nameFuel, fuelId, setFuelFilter, fuelFilter }) {
  const valid = !!fuelFilter.find((filter) => filter === fuelId);

  return (
    <li className="fuelElement">
      <h2>{nameFuel}</h2>
      <input
        type="checkbox"
        checked={valid}
        onChange={(event) =>
          event.target.checked
            ? setFuelFilter((array) => [...array, fuelId])
            : setFuelFilter((itemRemove) =>
                itemRemove.filter((idRemove) => idRemove !== fuelId)
              )
        }
      />
    </li>
  );
}

Fuel.propTypes = {
  nameFuel: PropTypes.string.isRequired,
  fuelFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
  setFuelFilter: PropTypes.func.isRequired,
  fuelId: PropTypes.number.isRequired,
};

function Fuels({ setFuelFilter, fuelFilter }) {
  return (
    <ul className="container">
      {fuelList.map((fuel) => (
        <Fuel
          key={fuel.nameFuel}
          nameFuel={fuel.nameFuel}
          fuelId={fuel.id}
          setFuelFilter={setFuelFilter}
          fuelFilter={fuelFilter}
        />
      ))}
    </ul>
  );
}

Fuels.propTypes = {
  setFuelFilter: PropTypes.func.isRequired,
  fuelFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Fuels;
