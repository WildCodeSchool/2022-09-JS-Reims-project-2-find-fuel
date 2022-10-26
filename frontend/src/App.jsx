import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import "./App.css";
import Geolocation from "./components/geolocation/Geolocation";

function App() {
  const location = Geolocation();
  return (
    <div className="App">
      <Home />
      <NavBar />
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet"}
    </div>
  );
}
export default App;
