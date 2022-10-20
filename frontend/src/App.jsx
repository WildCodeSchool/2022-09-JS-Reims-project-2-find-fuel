import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import Fuels from "@components/filter/Fuels";

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
