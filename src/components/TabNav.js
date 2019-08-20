import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {

    return (       
    <nav>
        <NavLink className="NavButton" to="/">Home</NavLink>
        <NavLink className="NavButton" to="/characters">Characters</NavLink>
        <NavLink className="NavButton" to="/locations">Locations</NavLink>
    </nav>
)
 
};
