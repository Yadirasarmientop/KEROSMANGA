import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogotipoHeader } from '../Logotipo/LogotipoHeader';
import './header.css';

export const NavBar = () => {
    return (
            
        <nav className="navbar navbar-expand-sm navbar-dark ">
            
            <LogotipoHeader />
    
            <div className="container">
                            
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ms-auto">
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-link nav-item"
                            to="/inicio"
                        >
                            INICIO
                        </NavLink>
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-link nav-item" 
                            to="/manga-aleatorio"
                        >
                            ALEATORIO
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            SEARCH
                        </NavLink>
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/login"
                        >
                            LOGIN
                        </NavLink>

                    </ul>
                </div>
            </div>
        
        </nav>
    )
}
