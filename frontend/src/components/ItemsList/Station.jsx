import PropTypes from "prop-types";
import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationsInfo from "./StationsInfo";

function Station(props) {
  const { station } = props;
  return (
    <div className="station">
      <StationsInfo station={station} />
      <FuelListing station={station} />
    </div>
  );
}
Station.propTypes = {
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

export default Station;
