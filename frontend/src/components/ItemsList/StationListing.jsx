import PropTypes from "prop-types";
import Station from "./Station";
import "../../../style/itemsList.css";

function StationListing(props) {
  const { fuelList, visible } = props;
  return (
    <section className={visible ? "visible" : "notVisible"}>
      {fuelList.map((station) => (
        <Station key={station.id} station={station} />
      ))}
    </section>
  );
}
StationListing.propTypes = {
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
  visible: PropTypes.bool.isRequired,
};
export default StationListing;
