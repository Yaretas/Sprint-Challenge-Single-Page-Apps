import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    return (       
    <nav>
        <NavLink className="nav-Button" to="/">Home</NavLink>
        <NavLink className="nav-Button" to="/characters">Characters</NavLink>
        <NavLink className="nav-Button" to="/locations">Locations</NavLink>
        <NavLink className="nav-Button" to="/episodes">Episodes</NavLink>
    </nav>
)
 
};
