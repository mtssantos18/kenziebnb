import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import iconHouse from "../../assets/bsHouseFill.svg";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { array } from "yup";
import { propNames } from "@chakra-ui/react";

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
          setCenter(res.results[0].geometry.location);
        })
        .finally(() => {
          setMark(true);
        });
    }
  }, [address]);

  const containerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "10px",
  };

  return (
    <Container>
      <h3>Localização</h3>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {mark && <Marker position={center} icon={iconHouse} />}
        </GoogleMap>
      )}
    </Container>
  );
}

export default Map;
