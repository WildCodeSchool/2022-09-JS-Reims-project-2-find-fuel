import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import Station from "./components/ItemsList/Station";
import Leaflet from "./components/map/Leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Fuels />
      <Leaflet />
      <Station />
      <Station />
      <Station />
    </div>
  );
}

export default App;
