import React, {useMemo} from 'react';
// import { getMangaById } from '../../selectors/getMangaById';
// import { MangaCard } from './MangaCard';


export const ImageScroll = ({id}) => {

    // const mangas = useMemo(() => getMangaById(id), [id]);


    return (
        <div className="slick-list" id="slick-list">
            <button 
                className= "slick-arrow slick-prev"
                id= "button-prev"
            >
                <i class="fas fa-angle-double-left"></i>
            </button>

            {/* {
                mangas.map(manga => (
                    <MangaCard
                        key={manga.id}
                        {... manga}
                    />
                ))
            } */}

            <button 
                className= "slick-arrow slick-prev"
                id= "button-prev"
            >
                <i className="fas fa-angle-double-right"></i>
            </button>
        </div>
    )
}
