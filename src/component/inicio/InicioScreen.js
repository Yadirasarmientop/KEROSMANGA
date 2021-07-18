import React from 'react';
import { ImageScroll } from './ImageScroll';
import './inicio.css';

export const InicioScreen = () => {
    return (
        <div className="container-titulo">
            <h4 className="titulo">
                DIRECTORIO MANGA
            </h4>
            <hr />
            <ImageScroll />
        </div>
    )
}
