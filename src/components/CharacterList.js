import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Header from "./Header.js";
import TabNav from "./TabNav.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const { characterList, setCharacterList } = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacterList(response.data);
      })
      .catch(err => {
        console.error("server Err", err);
      });
  }, []);

  return (
    <>
      <Header />
      <TabNav />

      <section className="character-list grid-view">
        {characterList.map(character => {
          return <CharacterCard character={character} key={character.id} />;
        })}
      </section>
    </>
  );
}
