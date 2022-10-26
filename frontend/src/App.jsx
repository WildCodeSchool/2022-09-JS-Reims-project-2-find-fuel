import axios from "axios";
import { useState } from "react";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Geolocation from "./components/geolocation/Geolocation";

function App() {
  const location = Geolocation();
  const [city, setCity] = useState("");
  if (location.loaded) {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${location.coordinates.lng}&lat=${location.coordinates.lat}`
      )
      .then((response) => setCity(response.data.features["0"].properties.city));
  } else {
    return null;
  }
  return (
    <div className="App">
      <Home />
      <NavBar />
      {location.loaded
        ? `Ta latitude : ${location.coordinates.lat} \n Ta longitude : ${location.coordinates.lng} \n Ta ville :${city} `
        : "Location data not available yet"}
    </div>
  );
}
export default App;
