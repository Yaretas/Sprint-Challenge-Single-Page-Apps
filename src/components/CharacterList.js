import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList]  = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacterList(response.data.results);
        console.log(characterList);
      })
      .catch(err => {
        console.error("server Err", err);
      });
  }, []);

  return (
    <>

      <section className="character-list grid-view">
        {characterList.map(character => {
          return <CharacterCard character={character} key={character.id} image={character.image} name={character.name} species={character.species} status={character.status} location={character.location.name} origin={character.origin.name}/>;
        })}
      </section>
    </>
  );
}
