import React from "react";
import "index.css";

export default function LocationCard(props) {
  const location = props.location;
  return (
    <div className="card">
      <h1 className=".character-h1">{location.name}</h1>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p> Residents Number: {location.residents.length}</p>
    </div>
  );
}