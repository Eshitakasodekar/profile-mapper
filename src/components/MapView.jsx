import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapView = ({ address }) => {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;

    setLoading(true);
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
          setPosition(null);
        }
      })
      .catch((err) => {
        console.error('Geocoding error:', err);
        setPosition(null);
      })
      .finally(() => setLoading(false));
  }, [address]);

  if (loading) return <p>Loading map...</p>;
  if (!position) return <p>Location not found for this address.</p>;

  return (
    <div style={{ height: '400px', marginBottom: '1rem' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
