import React from "react";

export default function EpisodeCard( {name, created, date , episode , character, air_date} ) {
  return (
    <div className="card">
    <h1 className="character-h1"> {name}</h1>
        <p>Episode: {episode}</p>
        {/* <p>Date Created: {created}</p>
        <p>Number of Characters: {character.length}</p> */}
        <p>Air Date: {air_date}</p>
        {/* <p>origin: {origin.name}</p> */}
    </div>
  ); 
}