import StationInfo from "./components/ItemsList/StationsInfo";
import "./App.css";
import FuelItems from "./components/ItemsList/FuelItems";

function App() {
  return (
    <div className="App">
      <FuelItems />
      <StationInfo />
    </div>
  );
}

export default App;
