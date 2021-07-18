import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
<div className="slick-track" id="track">
            <Carousel responsive={responsive}>

                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-1.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-2.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-3.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-4.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-5.png'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-6.png'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-7.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
                <div className="slick" >
                    <Link exact to="/inicio">
                        
                        <img 
                            src='/img/animes/image-8.jpg'
                            alt={title}
                            className="image"
                        >                        
                        </img>

                        <h4><small>title</small></h4>
                    </Link>

                </div>
            </Carousel>;
            
        </div>
}