// import React, {useMemo} from 'react';
// import { getMangaById } from '../../selectors/getMangaById';
// import { MangaCard } from './MangaCard';
import { Link } from 'react-router-dom';
import './MangaCard.css';


export const ImageScroll = () => {

    // const mangas = useMemo(() => getMangaById(id), [id]);
  

    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active" id="item">
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-1.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-1.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-1.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-1.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                    </div>
                    
                    <div class="carousel-item" id="item">
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-2.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-2.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-2.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                        <div className= "slick">
                            <Link exact to="/inicio">
                                <img src='/img/animes/image-1.jpg' class="d-block image" alt='Titulo'>
                                </img>
                                <h4><small>Boku No Hero</small>wacth</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
