import React, { useState } from 'react';
import { SearchBox } from './searchBox/SearchBox';
import {mangas} from '../../data/MOCK_DATA';
import './searchBox/searchStyle.css';
import { SearchResults } from './searchResults/SearchResults';

export const SearchScreen = () => {

    const [isAtTop, setisAtTop]= useState(false);

    const handleOpenSearch =() => {
        setisAtTop(false);
        setResults([])
    };

    const [results, setResults] = useState([]);
    console.log(results);

    const handleSearchClick = (searchText) => {

        if (mangas?.length){

            const searchTextMinus = searchText.toLowerCase();

            const filterData = mangas.filter((value)=>(
                    
                value.title.toLowerCase().includes(searchTextMinus)||
                value.description.toLowerCase().includes(searchTextMinus)||
                value.gender.toLowerCase().includes(searchTextMinus) 
                
            ));

           setResults(filterData);
        }   
    }

    return (
        <div className={`search ${isAtTop?"search--top":"search--center"}`}>
           <SearchBox 
                onSearch={handleSearchClick}
                onClose={handleOpenSearch} 
            />
            <SearchResults results={results}/>
        </div>
    )
}
