import React from 'react';
import { useState } from 'react';
import '../../inicio/MangaCard.css';
import './searchStyle.css';

export const SearchBox = () => {

    const [searchText, setSearchText] = useState("");

    return (
        <div>
            <div className="search-box">
                <h2 className="titulo">BUSCADOR DE MANGAS</h2>
                <hr />
                <label>
                    <input
                        type = "text"
                        className = "search-box-input"
                        placeholder = "Buscar..."
                        autoComplete = "off"
                        value = {searchText}
                        onChange = {({target: {value}})=>setSearchText(value)}
                    ></input>
                </label>
                <button>
                <i className="fas fa-search"></i> 
                </button>
               
            </div>
        </div>
    )
}
