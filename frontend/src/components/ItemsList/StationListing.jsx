import PropTypes from "prop-types";
import Station from "./Station";
import "../../../style/itemsList.css";

function StationListing(props) {
  const { visible } = props;
  return (
    <section className={visible ? "visible" : "notVisible"}>
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
    </section>
  );
}

StationListing.propTypes = {
  visible: PropTypes.bool.isRequired,
};
export default StationListing;
