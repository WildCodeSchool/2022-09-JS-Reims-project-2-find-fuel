import PropTypes from "prop-types";
import React, { useState } from "react";
import CoordProps from "../../prop-types/CoordProps";
import "../../../style/itemsList.css";

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
  const [open, setOpen] = useState("Fermé");
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  React.useEffect(() => {
    // Y-a t'il des horaires
    if (station.horaires !== null) {
      // On vérifie si il y a un automate
      if (station.horaires["@automate-24-24"] === "1") {
        setOpen("Ouvert");
        // On vérifie si la station n'est pas fermée en fonction du jour
      } else if (station.horaires.jour[currentDay]["@ferme"] !== "1") {
        // On vérifie que la station possède des horaires d'ouverture et de fermeture
        if (station.horaires.jour[currentDay].horaire) {
          const openHour =
            station.horaires.jour[currentDay].horaire["@ouverture"];
          const closeHour =
            station.horaires.jour[currentDay].horaire["@fermeture"];
          // On vérifie que les horaires d'ouverture et de fermeture sont égaux à "00.00"
          if (
            station.horaires.jour[currentDay].horaire["@ouverture"] ===
              "00.00" &&
            station.horaires.jour[currentDay].horaire["@fermeture"] === "00.00"
          ) {
            setOpen("Ouvert");
            // Sinon on vérifie que l'heure actuelle est comprise entre l'heure d'ouverture et de fermeture
          } else if (
            currentHour.toString() >=
              openHour.substring(openHour.indexOf(".") + 1) &&
            currentHour.toString() <
              closeHour.substring(closeHour.indexOf(".") + 1)
          ) {
            setOpen("Ouvert");
          }
        }
      }
    } else {
      setOpen("Horaires inconnus");
    }
  }, []);

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

      <p className="stateStation">
        {Math.sqrt(
          (myX - stationX) ** 2 + (myY - stationY) ** 2 + (myZ - stationZ) ** 2
        )}{" "}
        KM
      </p>
      {open === "Ouvert" && (
        <p>
          <span className="circleColor openColor" />
          Ouvert
        </p>
      )}
      {open === "Fermé" && (
        <p>
          <span className="circleColor closeColor" />
          Fermé
        </p>
      )}
      {open === "Horaires inconnus" && (
        <p>
          <span className="circleColor unknownColor" />
          Horaires inconnus
        </p>
      )}
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
    horaires: PropTypes.shape({
      "@automate-24-24": PropTypes.string,
      jour: PropTypes.arrayOf(
        PropTypes.shape({
          "@ferme": PropTypes.string,
          id: PropTypes.string,
          nom: PropTypes.string,
          horaire: PropTypes.shape({
            "@fermeture": PropTypes.string,
            "@ouverture": PropTypes.string,
          }),
        })
      ),
    }),
    carburants: PropTypes.arrayOf(
      PropTypes.shape({
        carburant: PropTypes.string.isRequired,
        prix: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default StationsInfo;
