import React, { useEffect, useState } from "react";

import axios from "axios";
import LocationCard from "./LocationCard.js";
import Header from "./Header";
import TabNav from "./TabNav";

export default function LocationsList() {

    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
        setLocationList(response.data.results);
        })
        .catch(err => {
        console.log("Server error", err);
        });
    }, []);

    return (
    <>
        <Header />
        <TabNav />
        <section className="location-list grid-view">
        {locationList.map(location => {
            return <LocationCard location={location} key={location.id} />;
        })}
        </section>
    </>
    );
}
