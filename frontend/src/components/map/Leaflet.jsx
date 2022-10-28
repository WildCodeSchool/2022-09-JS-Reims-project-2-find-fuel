import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";

function Leaflet(props) {
  const { fuelList } = props;

  return (
    <MapContainer
      center={[49.259037, 4.031781]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.216, 4.057]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {fuelList.map((fuel) => (
        <Marker key={fuel.fields.id} position={fuel.fields.geom}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}{" "}
    </MapContainer>
  );
}
Leaflet.propTypes = {
  fuelList: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        id: PropTypes.number.isRequired,
        geom: PropTypes.arrayOf(PropTypes.numbers).isRequired,
      }).isRequired,
    })
  ).isRequired,
};
export default Leaflet;
