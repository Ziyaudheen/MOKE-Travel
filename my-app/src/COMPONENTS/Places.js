import React, { useEffect } from "react";
import place from "../COMPONENTS/images/2023-08-17.png";
import location from "../COMPONENTS/images/place.svg";
import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import {Helmet} from 'react-helmet'


export default function Places() {
  
  const [Place, setPlace] = useState([]);
  useEffect(() => {
    axios
      .get("https://traveller.talrop.works/api/v1/places/")
      .then(function (response) {
        console.log(response.data.data);
        setPlace(response.data.data)
      })
      .catch(function (error) {
        
        // console.log(error);
      });
      
  }, []);
    
 
   

  return (
    <div className="places">
      
  <Helmet>
  <title>places|MOKE travel</title>
  </Helmet>    
      <h1>Welcome</h1>
      <h5>Explore the world around you</h5>
      <ul>
      
        {Place.map((place) =>(
          <li key={place.id}>

             <div className="container">
             <Link to={`${place.id}`}><img src={place.image} alt="" className="main" /> </Link>
            <h1>{place.name}</h1>
            <div className="bottom">
              <img src={location} alt="" />
              <h5>{place.name}</h5>
            </div>
          </div>
        </li>
        ))}
        
        
      </ul>
    </div>
  );
}
