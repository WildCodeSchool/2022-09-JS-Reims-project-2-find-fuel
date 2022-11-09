import React, { useState } from "react";
import axios from "axios";
import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/NavBar";
import StationListing from "./components/ItemsList/StationListing";
import Leaflet from "./components/map/Leaflet";
import "./App.css";
import getData from "./data/api";
import Geolocation from "./components/geolocation/Geolocation";
import FilterPage from "./components/filter/FilterPage";

function App() {
  const [fuelList, setFuelList] = useState([]);
  const [city, setCity] = useState("reims");
  const [isShown, setIsShown] = useState(false);
  const eventFilterButton = () => {
    setIsShown(!isShown);
  };

  const row = 200;
  const url = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${city}&rows=${row}&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=services_service&facet=horaires_automate_24_24&refine.prix_maj=2022`;

  React.useEffect(() => {
    getData(url, setFuelList);
  }, [city]);

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
      <Leaflet fuelList={fuelList} />
      <StationListing />
      <NavBar setVille={setCity} eventFilterButton={eventFilterButton} />
      {location.loaded
        ? `Ta latitude : ${location.coordinates.lat} \n Ta longitude : ${location.coordinates.lng} \n Ta ville :${city} `
        : "Location data not available yet"}
    </div>
  );
}
export default App;
