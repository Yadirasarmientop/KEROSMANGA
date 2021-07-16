import React from 'react';
import './header.css';

export const MenuHeader = () => {
    return (
        <>
            <input type="checkbox" id="btn-menu"></input>
            <label className="btn-menu"><i className="fas fa-bars"></i></label>

            <nav className= "menu">
            <ul>
                <li><a href="m">INICIO</a></li>
                <li><a href="m">MANGA ALEATORIO</a></li>
                <li><a href="m">FAVORITOS</a></li>
            </ul>
            </nav>
        </>
    )
}
