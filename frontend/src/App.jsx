import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import Leaflet from "@components/map/Leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FuelItems />
      <Fuels />
      <Leaflet />
    </div>
  );
}

export default App;
