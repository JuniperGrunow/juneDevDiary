import Navbar from "./navbar.jsx";
import {useState, createContext,useContext} from "react";
import HomePage from "./HomePage.jsx";
import * as React from 'react';



export default function Workport() {
    const OpenPageContext = createContext(<HomePage></HomePage>);
    const OpenPage = useContext(OpenPageContext)
    return (
        <div id={"viewport"} style={{ height: "100%", width: "100%" }}>
            <Navbar></Navbar>
            <div id={"workport"}>
                {OpenPage}
            </div>
        </div>
    )
}

