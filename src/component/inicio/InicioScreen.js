import React from 'react';
import { ImageScroll } from './ImageScroll';
import './MangaCard.css';

export const InicioScreen = () => {
    return (
        <div className="Carousel">
            <h4 className="titulo">
                DIRECTORIO MANGA
            </h4>
            <hr />
            <ImageScroll />
            <hr />
        </div>
    )
}
