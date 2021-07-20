import React from 'react';
import '../searchBox/searchStyle.css';

export const SearchResults = ({results}) => {
    return (
        <div>
            {results?.map((value)=>{
                return (
                    <div key={value.id} className="results animate__animated animate__fadeInUp">
                        
                        <h5>{value.title}</h5>
                        <p>{value.gender}</p>
                        <p>{value.description}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
