import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import Station from "./components/ItemsList/Station";
import Leaflet from "./components/map/Leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Filter />
      <Fuels />
      <Leaflet />
      <Station />
      <NavBar />
    </div>
  );
}

export default App;
