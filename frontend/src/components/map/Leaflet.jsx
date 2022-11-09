import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import PropTypes, { number } from "prop-types";
import "../../../style/leaflet.css";

function ChangeView(props) {
  const { center, zoom } = props;
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Leaflet(props) {
  const { fuelList, geo } = props;
  return (
    <MapContainer center={geo} zoom={12} scrollWheelZoom>
      <ChangeView center={geo} zoom={12} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fuelList.map((fuel) => (
        <Marker key={fuel.id} position={fuel.geom}>
          <Popup className="popup">
            <thead>
              <tr>
                <th colSpan="3">
                  {fuel.adresse} {fuel.ville}
                </th>
              </tr>
              <tr>
                <th>Carburants</th>
                <th>Prix</th>
                <th>Mise a jour</th>
              </tr>
            </thead>
            {fuel.carburants.map((elt) => {
              const date = new Date(elt.date);
              return (
                <tr key={elt.carburant}>
                  <td>{elt.carburant}</td>
                  <td>{elt.prix} €</td>
                  <td>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}</td>
                </tr>
              );
            })}
          </Popup>
        </Marker>
      ))}{" "}
    </MapContainer>
  );
}
Leaflet.propTypes = {
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
  geo: PropTypes.arrayOf(number).isRequired,
};

ChangeView.propTypes = {
  center: PropTypes.arrayOf(number).isRequired,
  zoom: PropTypes.number.isRequired,
}.isRequired;

export default Leaflet;
