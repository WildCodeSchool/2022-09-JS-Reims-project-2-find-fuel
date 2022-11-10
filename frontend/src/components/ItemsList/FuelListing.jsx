import PropTypes from "prop-types";
import React from "react";
import "../../../style/itemsList.css";
import FuelItem from "./FuelItem";

function FuelListing(props) {
  const { station } = props;
  return (
    <div className="fuelListing">
      {station.carburants.map((fuel) => (
        <FuelItem key={fuel.carburantId} fuel={fuel} />
      ))}
    </div>
  );
}

FuelListing.propTypes = {
  station: PropTypes.shape({
    adresse: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    geom: PropTypes.arrayOf(PropTypes.number).isRequired,
    carburants: PropTypes.arrayOf(
      PropTypes.shape({
        carburant: PropTypes.string.isRequired,
        prix: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};
export default FuelListing;
