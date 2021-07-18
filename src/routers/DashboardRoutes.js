import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {NavBar} from '../component/ui/NavBar';
import {InicioScreen} from '../component/inicio/InicioScreen';
import {MangaAleatScreen} from '../component/manga-aleatorio/MangaAleatScreen';
import { SearchScreen } from '../component/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
           <NavBar /> 
           <div className="container mt-2">
               <Switch>
                    <Route exact path="/inicio" component= {InicioScreen} />
                    <Route exact path="/manga-aleatorio" component= {MangaAleatScreen} />
                    <Route exact path="/search" component= {SearchScreen} />

                    <Redirect  to="/inicio" />
               </Switch>
           </div>
        </>
    )
}