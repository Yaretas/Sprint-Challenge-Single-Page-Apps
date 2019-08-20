import React from "react";
import "index.css";

export default function CharacterCard(props) {
  const char = props.char;
  return (
    <div className="card">
    <img src={char.image} />
    <h1 className="character-h1"> {char.name}</h1>

        <p>Species: {char.species}</p>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
        <p>Location: {char.location.name}</p>
        <p>Origin: {char.origin.name}</p>
    </div>
  );
}
