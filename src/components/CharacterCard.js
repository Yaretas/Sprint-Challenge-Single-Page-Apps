import React from "react";

export default function CharacterCard( { image, name, species, status, location, origin, episodes } ) {
  return (
    <div className="card">
    <img src={image} />
    <h1 className="character-h1"> {name}</h1>
  
         <p>species: {species}</p>
         <p>status: {status}</p>
         {/* <p>gender: {gender}</p> */}
         <p>location: {location.name}</p>
         <p>origin: {origin.name}</p>
    </div>
  );
}
