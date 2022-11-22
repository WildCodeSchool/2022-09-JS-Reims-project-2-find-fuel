import PropTypes from "prop-types";
import React from "react";
import FuelListing from "./FuelListing";
import "../../../style/itemsList.css";
import StationsInfo from "./StationsInfo";
import CoordProps from "../../prop-types/CoordProps";

function Station(props) {
  const { currentPosition, station } = props;
  return (
    <div className="station">
      <StationsInfo station={station} currentPosition={currentPosition} />
      <FuelListing station={station} />
    </div>
  );
}
Station.propTypes = {
  currentPosition: PropTypes.shape(CoordProps.isRequired).isRequired,
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
