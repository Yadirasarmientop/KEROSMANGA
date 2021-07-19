import React from 'react';
import { useState } from 'react';
import '../../inicio/MangaCard.css';
import './searchStyle.css';

export const SearchBox = ({onSearch, onClose}) => {

    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        searchText('');
        onClose();
    }

    return (
        
        <div className="search-box">
            <h2 className="titulo search-box-titulo">BUSCADOR DE MANGAS</h2>
            <hr />
            <div search-box-buttons>

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

                <button 
                className="search-btn"
                onClick={onSearch}
                >
                    Buscar
                </button>

                <button 
                    className="search-btn"
                    onClick={handleSearchClick}
                >
                    Cerrar
                </button>

            </div>
            
        </div>
        
    )
}
