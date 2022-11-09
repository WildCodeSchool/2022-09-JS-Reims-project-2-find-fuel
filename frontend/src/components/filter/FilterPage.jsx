import "../../../style/filterpage.css";
import PropTypes from "prop-types";

function FilterPage(props) {
  const { eventFilterButton } = props;
  return (
    <div className="filterPage">
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
