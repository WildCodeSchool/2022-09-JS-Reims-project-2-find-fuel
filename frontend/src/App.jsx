import Fuels from "./components/filter/Fuels";
import "./App.css";
import FuelItems from "./components/ItemsList/FuelItems";

function App() {
  return (
    <div className="App">
      <FuelItems />
      <Fuels />
    </div>
  );
}

export default App;
