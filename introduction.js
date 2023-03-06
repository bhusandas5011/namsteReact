/***  #####ABOUT PARSER######  
 
 * Creating  A Server
 * THE AUTO RUN OF SERVER IS DONE BY HMR-(HOT MODULE REPLACEMENT),
 * AND IT IS DONE USING FILE WATCHER ALGORITHM- IT IS WRITTEN IN C++
 * BUNDLING
 * MINIFY
 * CLEANING OUR CODE
 * DEV ABD PRODUCTION BUILD
 * Super Fast build algorithm
 * Image Optimisation
 * Catching while development
 * Compression
 * Compatable with older version of browser
 * HTTPS change on dev
 * Port number management 
 * Consistant Hashing Alogirthm
 * Zero Config 
 * Tree Shaking - Removing un-wanted code
 *  */

// we have package managers which takes care of transitive depedencies of the code

import React from "react";
import ReactDOM  from "react-dom/client";

//React.createElement ==> objext ==> HTML(DOM)

const heading = React.createElement(
    "h1",
    {
        id : "title",
        key: "h1"
    },
    "Heading 1"
);


const heading2 = React.createElement(
    "h2",
    {
        id:"title"
    },
    "This is Heading 2 "
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading,heading2]
);



//As writing createElement number of times is a rigid task so we use "JSX"

//JSX is like HTML in js file but not HTML

//JSX ==> React.createElement ==> HTML(DOM)

//ALL this JSX conversion is done using BABEL which comes along with parcel

//This Is React Element
const heading3 =  (
    <h1 id="title" key = "h2">
        Namaste Dev
    </h1>
);

//React Component (Name of components starts with capital letter)
// -Functional Component - NEW method
// -Class Based Component - OLD method

//Functional Component (its a simple javascript function  with JSX code inside it )

const Heading4 = () => (
    <h1 id="title" key = "h2">
        Namasteeeeee Dev
    </h1>
);

const HeaderComponent = () =>{
    return(
        <div>
            {heading}
            < Heading4 />
            {Heading4()}
            <h1>Namaste React Functional Component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    );
};

const HeaderComponent2 = () =>(
        <div>
            <h1>Namaste React Functional Component</h1>
            <h2>This is a h2 tag</h2>
        </div>
);



const StyleObj = {
    backgroundColor: "red",
}
const jsx = (
    <div style={StyleObj}>
        <h1>JSX</h1>
        <h2>Second jsx</h2>
    </div>
)
//ORRRRR
const jsx1 = (
    <div style={{backgroundColor: "red",}}>
        <h1>JSX</h1>
        <h2>Second jsx</h2>
    </div>
)

//example for food apps

const burgerKing = {
    Image: "https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg",
    name:"BurgerKing",
    cusines: ["Burger","American"],
    rating:"4.2",
}


// const RestaurantCard = () => {
//     return (
//         <div className="card">
//             <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg"/>
//             <h2>Burger King</h2>
//             <h3>Burgers, American</h3>
//             <h4>4,2 Stars</h4>
//         </div>
//     )
// }

const RestaurantCard2 = () => {
    return (
        <div className="card">
            <img src= {burgerKing.Image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} Stars</h4>
        </div>
    );
};






const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react elements inside the root

//async defer

//root.render(container);

//root.render(heading3);

root.render(<HeaderComponent />)




const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString}) =>{
    
    return(
        <div className="card">
            <img src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant) =>{
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
                }
            )}

            {/* <RestaurantCard {...restaurantList[0].data}/>
            <RestaurantCard {...restaurantList[1].data}/>
            <RestaurantCard {...restaurantList[2].data}/>
            <RestaurantCard {...restaurantList[3].data}/>
            <RestaurantCard {...restaurantList[5].data}/> */}
        </div>
    );
};