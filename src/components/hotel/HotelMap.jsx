import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./HotelMap.css"

// Fix default Leaflet marker icons in Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapView({ hotelPosition, userPosition }) {
  const map = useMap();

  useEffect(() => {
    if (userPosition) {
      map.fitBounds([hotelPosition, userPosition], {
        padding: [40, 40],
        maxZoom: 14,
      });
    }
  }, [map, userPosition, hotelPosition]);

  return null;
}

const HotelMap = ({ hotel }) => {
  const [userPosition, setUserPosition] = useState(null);
  const [locationError, setLocationError] = useState("");

  const latitude = Number(hotel.latitude);
  const longitude = Number(hotel.longitude);

  const validCoordinates =
    hotel.latitude !== "" &&
    hotel.latitude != null &&
    hotel.longitude !== "" &&
    hotel.longitude != null &&
    Number.isFinite(latitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    Number.isFinite(longitude) &&
    longitude >= -180 &&
    longitude <= 180;

  if (!validCoordinates) {
    return <p>Please add valid hotel coordinates to display the map.</p>;
  }

  const hotelPosition = [latitude, longitude];

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
        setLocationError("");
      },
      () => {
        setLocationError("Unable to access your current location.");
      },
    );
  };

  return (
    <div className="hotel-map-section">
      <h2>Hotel Location</h2>

      <button onClick={handleGetLocation}>Show My Location</button>

      {locationError && <p>{locationError}</p>}

      <MapContainer
        center={hotelPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "350px",
          width: "100%",
          marginTop: "15px",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={hotelPosition}>
          <Popup>{hotel.name}</Popup>
        </Marker>

        {userPosition && (
          <Marker position={userPosition}>
            <Popup>Your Current Location</Popup>
          </Marker>
        )}

        <MapView hotelPosition={hotelPosition} userPosition={userPosition} />
      </MapContainer>
    </div>
  );
};

export default HotelMap;
