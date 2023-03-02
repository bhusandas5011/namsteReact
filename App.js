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

const Title = () => (
  <a href="/">
  <img
  className="logo" 
   alt="Food Items" 
   src="https://www.pngkey.com/png/detail/428-4282931_uber-for-food-delivery-food-delivery.png"></img>
   </a>
);

//Composing Components

const Header = () => {
    return (
        <div className="header">
            <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            
        </div>
        </div>
    );
};
const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "4138",
          "name": "Grand Hotel",
          "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
          "city": "3",
          "area": "Koti",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Haleem"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 1.100000023841858,
          "slugs": {
            "restaurant": "grand-hotel-abids-himayath-nagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
          "locality": "Abids Road",
          "parentId": 4001,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6082490~p=1~eid=00000186-a104-e240-00b7-d48700910110",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "4138",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 1.100000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "4320",
          "name": "Mehfil",
          "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
          "city": "3",
          "area": "Narayanguda",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Tandoor",
            "Chinese",
            "Kebabs"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "mehfil-narayanguda-himayath-nagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
          "locality": "Near Narayanguda Flyover",
          "parentId": 637,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "4320",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "7408",
          "name": "Paradise Biryani",
          "uuid": "ceea96e2-89b8-4a3a-9836-f54d3b4ff6eb",
          "city": "3",
          "area": "Himayatnagar",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "w5azeotyznq1bokbhdc0",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "North Indian",
            "Hyderabadi"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 2.5999999046325684,
          "slugs": {
            "restaurant": "paradise-street-no-8-himayath-nagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Ground Floor, Lingapur Building, Next to Almond House, Himayath Nagar, Hyderabad",
          "locality": "Next to Almond House",
          "parentId": 700,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FREE DELIVERY",
            "shortDescriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "Free Delivery",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6100808~p=4~eid=00000186-a104-e240-00b7-d4880091041b",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "7408",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 2.5999999046325684,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "4650",
          "name": "Bawarchi",
          "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
          "city": "3",
          "area": "New Nallakunta",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
          "cuisines": [
            "Biryani",
            "Tandoor",
            "Chinese",
            "Indian",
            "Desserts",
            "Kebabs",
            "Mughlai"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "slaString": "32 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "bawarchi-nallakunta-vidyanagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
          "locality": "RTC X roads",
          "parentId": 100,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FREE DELIVERY",
            "shortDescriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "Free Delivery",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "4650",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "32003",
          "name": "Rice Bowl",
          "uuid": "a6296c6c-6932-4269-81fd-bfe53ebb2a88",
          "city": "3",
          "area": "Himayatnagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "n2xdntdhn9d8z0kfmptv",
          "cuisines": [
            "North Indian",
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 2.799999952316284,
          "slugs": {
            "restaurant": "rice-bowl-himayath-nagar-himayath-nagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "3-6-196&197, Lane beside KFC, Prime plaza urdu hall lane, Opp PMJ Jewellers, Himayath Nagar, Hyderabad",
          "locality": "Urdu Galli",
          "parentId": 169302,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6081255~p=7~eid=00000186-a104-e240-00b7-d48900910777",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "32003",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "367769",
          "name": "Lucky Restaurant",
          "uuid": "0d2cb79c-7f66-4009-b393-3f9015ba849d",
          "city": "3",
          "area": "MasabTank",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "qems028i3da5rxf81rbp",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 4.800000190734863,
          "slugs": {
            "restaurant": "lucky-restaurant-banjara-hills-banjara-hills",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Dana Chambers, Saifabad Rd, Sham Nagar Colony, Chintal, Hyderabad, Telangana 500004",
          "locality": "Banjara Hills",
          "parentId": 293683,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "367769",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 4.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },];

//concept Driven UI

const RestaurantCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId}) =>{

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
                    return <RestaurantCard  {...restaurant.data} key= {restaurant.data.id}/>
                })
            }
            
        </div>
    );
};

const Footer = () =>{
    return (
        <h1>Footer</h1>
    );
};


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