import "../../../style/filterpage.css";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import Fuels from "./Fuels";

function FilterPage(props) {
  const { eventFilterButton } = props;
  return (
    <div className="filterPage">
      <Fuels />
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
};

export default FilterPage;
