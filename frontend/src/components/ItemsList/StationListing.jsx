import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Station from "./Station";
import "../../../style/itemsList.css";
import CoordProps from "../../prop-types/CoordProps";
import { distance } from "../../function/calculDistance";

function StationListing(props) {
  const { currentPosition, fuelList } = props;
  const [fuelListSorted, setFuelListSorted] = useState([]);

  useEffect(() => {
    if (currentPosition.latitude != null) {
      const newFuelList = [];

      fuelList.map((station) =>
        newFuelList.push({
          ...station,
          distance: distance(
            [currentPosition.latitude, currentPosition.longitude],
            station.geom
          ),
        })
      );

      newFuelList.sort((a, b) => a.distance - b.distance);

      setFuelListSorted(newFuelList);
    } else {
      setFuelListSorted(fuelList);
    }
  }, [fuelList, currentPosition]);

  return (
    <section className="listing">
      {fuelListSorted.map((station) => (
        <Station key={station.id} station={station} />
      ))}
    </section>
  );
}
StationListing.propTypes = {
  currentPosition: PropTypes.shape(CoordProps.isRequired).isRequired,
  fuelList: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
};
export default StationListing;
