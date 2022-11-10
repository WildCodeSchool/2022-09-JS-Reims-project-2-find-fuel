import PropTypes from "prop-types";
import React, { useState } from "react";
import "../../../style/itemsList.css";
import fullStar from "@assets/fullstar.png";
import emptyStar from "@assets/emptystar.png";

function StationsInfo(props) {
  const { station } = props;
  const [isfavorite, setIsFavorite] = useState(false);
  function handleFavorite() {
    return setIsFavorite(!isfavorite);
  }
  return (
    <div className="stationInfo">
      <h3 className="adressStation">
        {station.adresse} {station.ville}
      </h3>
      <button type="button" onClick={handleFavorite}>
        <img
          className={isfavorite ? "isFavorite" : "notFavorite"}
          src={isfavorite ? fullStar : emptyStar}
          alt="favorite"
        />
      </button>

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
