import React, { useState } from "react";
import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import FuelItems from "./components/ItemsList/FuelItems";
import Leaflet from "./components/map/Leaflet";
import "./App.css";
import getData from "./data/api";

function App() {
  const [fuelList, setFuelList] = useState([]);
  const [city, setCity] = useState("reims");

  const row = 200;
  const url = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${city}&rows=${row}&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=services_service&facet=horaires_automate_24_24&refine.prix_maj=2022`;

  React.useEffect(() => {
    getData(url, setFuelList);
  }, [city]);

  return (
    <div className="App">
      <Filter />
      <FuelItems />
      <Fuels />
      <Leaflet fuelList={fuelList} />
      <NavBar setVille={setCity} />
    </div>
  );
}

export default App;
