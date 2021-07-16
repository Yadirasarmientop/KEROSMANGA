import React from 'react';
import { LogotipoHeader } from './LogotipoHeader';
import { BuscadorHeader } from './BuscadorHeader';
import { MenuHeader } from './MenuHeader';

import './header.css';

export const HeaderApp = () => {


    return (
        <header>
            <LogotipoHeader/>
            <BuscadorHeader/>
            <MenuHeader/>
        </header>
    )
}
