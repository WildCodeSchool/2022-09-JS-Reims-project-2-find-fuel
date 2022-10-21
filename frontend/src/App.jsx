import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import Home from "./pages/Home";
import "./App.css";
import FuelItems from "./components/ItemsList/FuelItems";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <FuelItems />
      <Fuels />
    </div>
  );
}

export default App;
