import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/departament.json";

const mapPosition = [-24.000000, -57.623807];
const zoom = 7;
const style = {
  fillColor: "red",
  fillOpacity: 1,
  color: "black",
  weight: 2,
};

const onEachFeature = (feature, layer) => {
  let popupContent = `Name of department: ${feature.properties.departamento_nombre} 
    <br> Capital: ${feature.properties.departamento_capital}`;
  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }
  layer.bindPopup(popupContent);
};

function Map() {
  return (
    <div className="map-container">
      <MapContainer
        center={mapPosition}
        zoom={zoom}
        scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          style={style}
          data={data.features}
          onEachFeature={onEachFeature}
        /> 
      </MapContainer>
    </div>
  );
}

export default Map;