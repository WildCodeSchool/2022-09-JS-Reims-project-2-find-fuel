import { useEffect, useState } from "react";

function Geolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: "",
      lng: "",
    },
  });
  const onSuccess = (locations) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: locations.coords.latitude,
        lng: locations.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: false,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);
  return location;
}

export default Geolocation;
