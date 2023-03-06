import { useState } from "react";
import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
//import { useState } from "react"; //predeclared

//what is state?
//what is hooks?
//what is use state?



function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
    
    return filterData;
}

const Body = () =>{
    
    //const searchtext = "KFC" is in javascript below one is for react both are similar  
     
    const [restaurants,setrestaurants] = useState(restaurantList);
    //search text is local state variable
    const [searchText,setsearchText] = useState(""); //usestate returns a array which contains =  [variable name,function to update the variable] 
    
    return (
    <>
      <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
            //e.target.value whatever you write in input
            setsearchText(e.target.value);
        }}
        />
        <button className="search-btn"
        onClick={() => {
            //need to filter the data
            const data = filterData(searchText,restaurants);

            //update the state - restaurants
            setrestaurants(data);}}
            >search</button>
      </div>
      <div className="restaurant-list">
        {
            restaurants.map((restaurant) =>{
                return <RestaurantCard  {...restaurant.data} key= {restaurant.data.id}/>
            })
        }
        
    </div>
    </>
    );
};

export default Body;
