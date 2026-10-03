"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";

const cities = [
  { name: "Omaha", position: [41.2565, -95.9345] as [number, number] },
  { name: "La Vista", position: [41.1839, -96.0314] as [number, number] },
  { name: "Bellevue", position: [41.1544, -95.9146] as [number, number] },
  { name: "Papillion", position: [41.1544, -96.042] as [number, number] },
];

export default function ServiceAreaMap() {
  return (
    <div className="h-[350px] w-full overflow-hidden rounded-2xl border border-gray-200 md:h-[450px]">
      <MapContainer
        center={[41.21, -96.0]}
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <CircleMarker
            key={city.name}
            center={city.position}
            radius={10}
            pathOptions={{ color: "#1d4ed8", fillColor: "#1d4ed8", fillOpacity: 0.8 }}
          >
            <Tooltip permanent direction="top">{city.name}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}