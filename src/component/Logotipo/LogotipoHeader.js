import React from 'react';
import '../ui/header.css';
import logo from "./logo.svg";

export const LogotipoHeader = () => {
    return (
        <div className="logotipo">
            <img 
            src= {logo} 
            alt="imagen"
            className="logotipo"
            />
            <h4>KEROSMANGA</h4>
        </div>
    )
}
