import "../../../style/filterpage.css";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Fuels from "./Fuels";

function FilterPage({ eventFilterButton, setFuelFilter, fuelFilter }) {
  return (
    <div className="filterPage">
      <Fuels setFuelFilter={setFuelFilter} fuelFilter={fuelFilter} />
      <Buttons />
      <button
        onClick={eventFilterButton}
        className="buttonFilterClose"
        type="button"
      >
        X
      </button>
    </div>
  );
}
FilterPage.propTypes = {
  eventFilterButton: PropTypes.func.isRequired,
  setFuelFilter: PropTypes.func.isRequired,
  fuelFilter: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FilterPage;
