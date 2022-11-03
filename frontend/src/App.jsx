import React, { useState } from "react";
import axios from "axios";
import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/NavBar";
import Station from "./components/ItemsList/Station";
import Leaflet from "./components/map/Leaflet";
import "./App.css";

const ville = "reims";
const row = 100;
const url = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=${ville}&rows=${row}&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=services_service&facet=horaires_automate_24_24&refine.prix_maj=2022`;

function App() {
  const [fuelList, setFuelList] = useState([]);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setFuelList(response.data.records);
    });
  }, []);

  return (
    <div className="App">
      <Filter />
      <Leaflet fuelList={fuelList} />
      <Station />
      <Station />
      <NavBar />
    </div>
  );
}

export default App;
