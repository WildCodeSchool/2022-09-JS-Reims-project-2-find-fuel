import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import "./App.css";
import FuelItems from "./components/ItemsList/FuelItems";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FuelItems />
      <Fuels />
    </div>
  );
}

export default App;
