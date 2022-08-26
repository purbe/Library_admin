import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListPage from './listpage';
import Home from './home';
import DetailPage from './detailpage';
//import Students from './students';

const Webpages = () => {
    return(

        <BrowserRouter>
        
            <Routes>
            <Route exact path="/" element={< Home />} />
            <Route exact path="/list-page" element={< ListPage />} />
            <Route exact path = "/detail-page" element={< DetailPage />} />
            </Routes>
        </BrowserRouter>

       
    );
};
export default Webpages;