import PropTypes from "prop-types";
import React from "react";
import "../../../style/itemsList.css";

function FuelItem(props) {
  const { fuel } = props;
  return (
    <figure className="figure">
      <img src="https://via.placeholder.com/50" alt="Fuels" />
      <figcaption>{fuel.prix}</figcaption>
    </figure>
  );
}

FuelItem.propTypes = {
  fuel: PropTypes.shape({
    carburant: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
  }).isRequired,
};

export default FuelItem;
