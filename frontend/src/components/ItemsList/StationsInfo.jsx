import PropTypes from "prop-types";
import React from "react";
import "../../../style/itemsList.css";

function StationsInfo(props) {
  const { station } = props;
  return (
    <div className="stationInfo">
      <h3 className="adressStation">
        {station.adresse} {station.ville}
      </h3>
      <img
        className="imageFavorite"
        src="https://via.placeholder.com/20"
        alt="state"
      />
      <p className="stateStation">6.8 KM</p>
      <p>
        <span className="circleColor" />
        Ouvert
      </p>
    </div>
  );
}
StationsInfo.propTypes = {
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

export default StationsInfo;
