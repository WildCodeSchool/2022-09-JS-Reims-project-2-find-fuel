import PropTypes from "prop-types";
import React, { useState } from "react";
import CoordProps from "../../prop-types/CoordProps";
import "../../../style/itemsList.css";
import fullStar from "../../assets/fullstar.png";
import emptyStar from "../../assets/emptystar.png";

const earthRadiusInKm = 6371;
const degreeToRadian = (degree) => (Math.PI * degree) / 180;

const sphericToCartesian = ([latitude, longitude]) => [
  earthRadiusInKm *
    Math.cos(degreeToRadian(latitude)) *
    Math.cos(degreeToRadian(longitude)),
  earthRadiusInKm *
    Math.cos(degreeToRadian(latitude)) *
    Math.sin(degreeToRadian(longitude)),
  earthRadiusInKm * Math.sin(degreeToRadian(latitude)),
];

function StationsInfo(props) {
  const { currentPosition, station } = props;
  const [isfavorite, setIsFavorite] = useState(false);
  function handleFavorite() {
    return setIsFavorite(!isfavorite);
  }

  const [myX, myY, myZ] = sphericToCartesian([
    currentPosition.latitude,
    currentPosition.longitude,
  ]);
  const [stationX, stationY, stationZ] = sphericToCartesian(station.geom);

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

      <p className="stateStation">
        {Math.sqrt(
          (myX - stationX) ** 2 + (myY - stationY) ** 2 + (myZ - stationZ) ** 2
        )}{" "}
        KM
      </p>
      <p className="isOpenText">
        <span className="circleColor" />
        Ouvert
      </p>
    </div>
  );
}
StationsInfo.propTypes = {
  currentPosition: CoordProps.isRequired,
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
