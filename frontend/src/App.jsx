import Filter from "./components/filter/Filter";
import NavBar from "./components/navbar/NavBar";
import Station from "./components/ItemsList/Station";
import Leaflet from "./components/map/Leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Filter />
      <Leaflet />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <Station />
      <NavBar />
    </div>
  );
}

export default App;
