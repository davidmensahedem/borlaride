import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
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



const Map: React.FC = () => {
  const [mapCenter] = useState<number[]>([5.5557, -0.2186]);
  const [mapZoom] = useState(13);
  const [mapMarkers] = useState<Array<{
    position: [number, number],
    title: string,
    price: string
  }>>([
    {
      position: [5.5557, -0.2186] as [number, number], // La Paz
      title: 'Modern House',
      price: '$17,000/mo'
    },
    {
      position: [5.6037, -0.1870] as [number, number], // Dzorwulu
      title: 'Luxury Apartment',
      price: '$12,000/mo'
    },
    {
      position: [5.5586, -0.2030] as [number, number], // Circle
      title: 'Family Home',
      price: '$15,000/mo'
    }
  ]);


  return (
    <MapContainer
      center={mapCenter as [number, number]}
      zoom={mapZoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapMarkers.map((marker, index) => (
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