import NavBar from "./components/navbar/NavBar";
import Fuels from "./components/filter/Fuels";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <Fuels />
    </div>
  );
}

export default App;
