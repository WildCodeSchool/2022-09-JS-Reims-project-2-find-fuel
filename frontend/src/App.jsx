import Station from "./components/ItemsList/Station";
import Leaflet from "./components/map/Leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Leaflet />
      <Station />
      <Station />
      <Station />
    </div>
  );
}

export default App;
