import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import StationListing from "./components/ItemsList/StationListing";
import Leaflet from "./components/map/Leaflet";
import "./App.css";
import getData, { sortFuel } from "./data/api";
import FilterPage from "./components/filter/FilterPage";

function App() {
  const [fuelList, setFuelList] = useState([]);
  const [city, setCity] = useState("reims");
  const [isShown, setIsShown] = useState(false);
  const eventFilterButton = () => {
    setIsShown(!isShown);
  };
  const [pointGeo, setPointGeo] = useState([49.259037, 4.031781]);
  const [visible, setVisible] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({});
  const [fuelFilter, setFuelFilter] = useState([]);

  const withScreen = window.screen.availWidth;

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
  React.useEffect(() => {
    if (withScreen >= 800) {
      changeView();
    }
  }, []);
  React.useEffect(() => {
    sortFuel(fuelFilter, setFuelList);
  }, [fuelFilter]);
  return (
    <div className="App">
      {isShown && (
        <FilterPage
          eventFilterButton={eventFilterButton}
          setFuelFilter={setFuelFilter}
          fuelFilter={fuelFilter}
        />
      )}
      <Leaflet fuelList={fuelList} geo={pointGeo} />
      <button type="button" className="buttonList" onClick={() => changeView()}>
        {visible ? "⇩" : "⇧"}
      </button>
      {visible && (
        <StationListing
          fuelList={fuelList}
          currentPosition={currentPosition}
          fuelFilter={fuelFilter}
        />
      )}
      <NavBar
        setCity={setCity}
        eventFilterButton={eventFilterButton}
        setCurrentPosition={setCurrentPosition}
      />
    </div>
  );
}
export default App;
