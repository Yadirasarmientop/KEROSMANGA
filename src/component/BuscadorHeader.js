import React from 'react';
import { useForm } from '../Hooks/useForm';
import './header.css';

export const BuscadorHeader = () => {

    const [{search}, handleInputChange]= useForm ({search: ''});
    return (
        <>
            <div className="search">
                <input
                    type = "text"
                    className = "search-bar"
                    placeholder = "Buscar..."
                    autoComplete = "off"
                    value = {search}
                    onChange = {handleInputChange}
                ></input>
                <div className= "btn icon-search">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </>
    )
}
