import PropTypes from "prop-types";
import Station from "./Station";
import "../../../style/itemsList.css";
import CoordProps from "../../prop-types/CoordProps";

function StationListing(props) {
  const { currentPosition, fuelList } = props;
  return (
    <section className="listing">
      {fuelList.map((station) => (
        <Station
          key={station.id}
          station={station}
          currentPosition={currentPosition}
        />
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
