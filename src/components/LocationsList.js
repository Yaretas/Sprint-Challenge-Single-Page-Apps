import React, { useEffect, useState } from "react";

import axios from "axios";
import LocationCard from "./LocationCard.js";

export default function LocationsList() {

    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
            console.log(response);
        setLocationList(response.data.results);
        })
        .catch(err => {
        console.log("Server error", err);
        });
    }, []);

    return (
    <>
        <section className="location-list grid-view">
        {locationList.map(location => {
            return <LocationCard location={location} key={location.id} />;
        })}
        </section>
    </>
    );
}
