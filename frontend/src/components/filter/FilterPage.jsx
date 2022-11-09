import "../../../style/filterpage.css";
import PropTypes from "prop-types";

function FilterPage(props) {
  const { eventFilterButton } = props;
  return (
    <div className="FilterPage">
      <button
        onClick={eventFilterButton}
        className="button_filter_close"
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
