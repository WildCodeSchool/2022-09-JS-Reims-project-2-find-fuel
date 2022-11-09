import PropTypes from "prop-types";
import Station from "./Station";

function StationListing(props) {
  const { fuelList } = props;
  return (
    <section>
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
};

export default StationListing;
