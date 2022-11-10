import PropTypes from "prop-types";

function FilterButton(props) {
  const { eventFilterButton } = props;

  return (
    <div>
      <button
        onClick={eventFilterButton}
        className="button_filter"
        type="button"
      >
        Filtre
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        />
      </button>
    </div>
  );
}
FilterButton.propTypes = {
  eventFilterButton: PropTypes.func.isRequired,
};

export default FilterButton;
