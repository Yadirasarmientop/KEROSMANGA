import React,{ useState } from 'react';

import '../../inicio/MangaCard.css';
import './searchStyle.css';

export const SearchBox = ({onSearch, onClose}) => {

    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText ('');
        onClose();
    }

    return (
        
        <div className="search-box">
            <h2 className="titulo search-box-titulo">BUSCADOR DE MANGAS</h2>
            <hr />
            <div className = "search-box-buttons">

                <label>
                    <input
                        type = "text"
                        className = "search-box-input form-control"
                        placeholder = "Buscar..."
                        autoComplete = "off"
                        value = {searchText}
                        onChange = {({target: {value}})=>setSearchText(value)}
                    ></input>
                </label>

                <button 
                    className="search-btn btn-light"
                    onClick={() => onSearch(searchText)}
                >
                    Buscar
                </button>

                <button 
                    className="search-btn btn-light"
                    onClick={handleSearchClick}
                >
                    Cerrar
                </button>

            </div>
            
        </div>
        
    )
}
