import React from "react";
import { Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";

const AppRouter = () => {
    return (
    <>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route path="/episodes" component={EpisodeList} />
    </>
    );
};

export default AppRouter;