//FOOD APP
/***Requirements 
 
 * Header
      - Logo 
      - Nav Items(Right Side)
      - Cart      
 *  Body
      - Search Bar
      - Restaurent List
        - Restaurent Card
           - Image
           - Name 
           - Rating
           - Cusines

 *  Footer
      - Links
      -Copyrights

 
 * ***/


import React from "react";
import ReactDOM,{createRoot}  from "react-dom/client";

//Default Import
import Header from "./components/Header";


import Body from "./components/Body"

import Footer from "./components/footer";

import { IMG_CON_URL } from "./constants";



const AppLayout = () =>{
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer />
        </React.Fragment>
    );
};





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/> );