import PropTypes from "prop-types";
import React from "react";
import "../../../style/itemsList.css";
import getLogo from "../../function/logoCarburant";

function FuelItem(props) {
  const { fuel } = props;

  return (
    <figure className="fuelPrice">
      <img
        src={getLogo(fuel.carburantId)}
        alt="Fuels"
        className="logoCarburant"
      />
      <figcaption>{fuel.prix} €</figcaption>
    </figure>
  );
}

FuelItem.propTypes = {
  fuel: PropTypes.shape({
    carburant: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    carburantId: PropTypes.string.isRequired,
  }).isRequired,
};

export default FuelItem;
