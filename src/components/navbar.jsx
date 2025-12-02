import * as React from 'react';
import './styles_css/navbar.css';
import {createPortal} from 'react-dom';
import {useContext} from "react";

export default function Navbar(){
    const openContext = useContext("Open")
    console.log("this is loaded");
    return (
        <div className="navbar">
            <div className="functions">
            <h2>Junie's Dev Diary</h2>

                <div className="navbar-search">
                    <table>
                        <tr>
                            <td>
                                <input type="text" name="projectSearch" placeholder="Find your Project" />
                            </td>
                            <td>
                                <input type="submit" value="Search"  onClick={ () => window.location.reload() }/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id={"tabsHolder"}>
                <table>
                    <tr>
                        <tr>
                            <td><input type={"hidden"} value={"HOME"}/>HOME</td>
                        </tr>
                    </tr>
                </table>
            </div>
        </div>
    );

}

function searchProjectsHamburger(e){

    results = searchProjects(e.target.value);
    return createPortal(
        <div id={"projectSearch"}>
            <table>
            </table>
        </div>,
        document.getElementById('projectSearch')
    );
}

function setOpenPage(e){

}