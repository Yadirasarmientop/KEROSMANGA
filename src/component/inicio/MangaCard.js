import React from 'react';
import { Link } from 'react-router-dom';
// import './MangaCard.css';


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
        // <div className="slick-list" id="slick-list">
        //     <Link 
        //         className= " carousel-control-prev"
        //         type="button"
        //         data-bs-target="#carouselExampleControls"
        //         data-bs-slide="prev"
        //         id= "button-prev"
        //     >
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </Link >

        //     { <MangaCard />
            
        //     /* {
        //         mangas.map(manga => (
        //             <MangaCard
        //                 key={manga.id}
        //                 {... manga}
        //             />
        //         ))
        //     } */}

        //     <Link 
        //         className= "carousel-control-next"
        //         data-bs-target="#carouselExampleControls" 
        //         data-bs-slide="next"
        //         id= "button-next"
        //     >
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </Link >
        // </div>
        <div 
            className="slick-track carousel slide carousel-inner" 
            id="track carouselExampleControls" 
            data-bs-ride="carousel"
        >

            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-1.jpg'
                        alt={title}
                        className="image d-block"
                    >                        
                    </img>

                    <h4 ><small>title</small></h4>
                </Link>

            </div>
            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-2.jpg'
                        alt={title}
                        className="image d-block "
                    >                        
                    </img>

                    <h4><small>title</small>wacth</h4>
                </Link>

            </div>
            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-3.jpg'
                        alt={title}
                        className="image d-block "
                    >                        
                    </img>

                    <h4><small>title</small>wacth</h4>
                </Link>

            </div>
            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-4.jpg'
                        alt={title}
                        className="image d-block "
                    >                        
                    </img>

                    <h4><small>title</small>wacth</h4>
                </Link>

            </div>
            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-5.png'
                        alt={title}
                        className="image d-block "
                    >                        
                    </img>

                    <h4><small>title</small>wacth</h4>
                </Link>

            </div>
            <div className="slick carousel-item active" >
            
                <Link exact to="/inicio">
                    
                    <img 
                        src='/img/animes/image-6.png'
                        alt={title}
                        className="image d-block "
                    >                        
                    </img>

                    <h4><small>title</small>wacth</h4>
                </Link>

            </div>
        </div>
    )
}
