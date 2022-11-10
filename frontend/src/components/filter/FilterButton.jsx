import PropTypes from "prop-types";
import "../../../style/navbar.css";
import funnel from "@assets/funnel.png";

function FilterButton(props) {
  const { eventFilterButton } = props;

  return (
    <div>
      <button
        onClick={eventFilterButton}
        className="buttonFilter"
        type="button"
      >
        <img src={funnel} alt="Filtre" />
      </button>
    </div>
  );
}
FilterButton.propTypes = {
  eventFilterButton: PropTypes.func.isRequired,
};

export default FilterButton;
