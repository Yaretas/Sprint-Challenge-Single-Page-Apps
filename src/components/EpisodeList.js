import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";


export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes]  = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
          console.log(response);
        setEpisodes(response.data.results);
      })
      .catch(err => {
        console.error("server Err", err);
      });
  }, []);

  return (
    <>

      <section className="character-list grid-view">
        {episodes.map(ep => {
          return <EpisodeCard 
          key={ep.id}  
          air_date={ep.air_date} 
        //   created={created}
        //   character={ep.character.length} 
          episode={ep.episode} 
          name={ep.name} />;
        })}
      </section>
    </>
  );
}