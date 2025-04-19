import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Simple circle marker
const createMarker = (color: string = '#2563eb') => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    price: string;
  }>;
}

const Map: React.FC<MapProps> = ({ center, zoom, markers = [] }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={createMarker()}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{marker.title}</h3>
              <p className="text-blue-600">{marker.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map; 