import React from 'react';
import './header.css';
import logo from "./logo.svg";

export const LogotipoHeader = () => {
    return (
        <>
            <img src= {logo} alt="imagen"/>
            <h2 id= "logotipo">KEROSMANGA</h2>
        </>
    )
}
