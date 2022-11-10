import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar/NavBar";
import StationListing from "./components/ItemsList/StationListing";
import Leaflet from "./components/map/Leaflet";
import "./App.css";
import getData from "./data/api";
import Geolocation from "./components/geolocation/Geolocation";
import FilterPage from "./components/filter/FilterPage";
import Filter from "./components/filter/Filter";

function App() {
  const [fuelList, setFuelList] = useState([]);
  const [city, setCity] = useState("reims");
  const [isShown, setIsShown] = useState(false);
  const eventFilterButton = () => {
    setIsShown(!isShown);
  };
  const [pointGeo, setPointGeo] = useState([49.259037, 4.031781]);
  const [visible, setVisible] = useState(false);

  const row = 200;
  const url = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${city}&rows=${row}&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=services_service&facet=horaires_automate_24_24&refine.prix_maj=2022`;

  React.useEffect(() => {
    getData(url, setFuelList, city, setPointGeo);
  }, [city]);

  function changeView() {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  const location = Geolocation();
  if (location.loaded) {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${location.coordinates.lng}&lat=${location.coordinates.lat}`
      )
      .then((response) => setCity(response.data.features["0"].properties.city));
  }
  return (
    <div className="App">
      {isShown && <FilterPage eventFilterButton={eventFilterButton} />}
      <Filter />
      <Leaflet fuelList={fuelList} geo={pointGeo} />
      <button type="button" onClick={() => changeView()}>
        {visible ? "⇩" : "⇧"}
      </button>
      {visible && <StationListing fuelList={fuelList} />}
      <NavBar setVille={setCity} eventFilterButton={eventFilterButton} />
    </div>
  );
}
export default App;
