import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import iconHouse from "../../assets/bsHouseFill.svg";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function Map({ address }) {
  const [mark, setMark] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAJ8vU8FUxOZ7NtZnBKF_0nDdZ1qa47KWk",
  });
  const [center, setCenter] = useState({ lat: -23.3566039, lng: -46.3650844 });

  useEffect(() => {
    if (address) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address.street}, ${address.number}, ${address.city},Brasil,+CA&key=AIzaSyAJ8vU8FUxOZ7NtZnBKF_0nDdZ1qa47KWk`
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log(res.results[0].geometry.location);
          setCenter(res.results[0].geometry.location);
        })
        .finally(() => {
          setMark(true);
        });
      // .catch((err) => console.log(err));
    }
  }, [address]);

  const containerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "10px",
  };

  const onLoad = (marker) => {
    // console.log("marker: ", marker);
  };
  return (
    <Container>
      <h3>Localização</h3>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {mark && (
            <Marker onLoad={onLoad} position={center} icon={iconHouse} />
          )}
        </GoogleMap>
      )}
    </Container>
  );
}

export default Map;
