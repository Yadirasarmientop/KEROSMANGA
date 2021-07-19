import React, { useState } from 'react';
import { SearchBox } from './searchBox/SearchBox';
import './searchBox/searchStyle.css';

export const SearchScreen = () => {

    const [isAtTop, setisAtTop]= useState(false);

    const handleOpenSearch =() => {
        setisAtTop(!isAtTop);
    };
    

    return (
        <div className={`search ${isAtTop?"search--top":"search--center"}`}>
           <SearchBox 
                onSearch={handleOpenSearch}
                onClose={handleOpenSearch} 
            />
        </div>
    )
}
