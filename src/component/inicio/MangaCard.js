import React from 'react';
import { Link } from 'react-router-dom';

export const MangaCard = ({
    id,
    title,
    author,
    description,
    gender,
    image,
    chapters,
    isFinished
}) => {
    return (
        <div className="slick-track" id="track">
            <div className="slick" >
            
                <Link exact to="/inicio">
                    <h4><small>title</small></h4>
                    <img 
                        src={image}
                        alt={title}
                    >                        
                    </img>
                </Link>

            </div>
        </div>
    )
}
