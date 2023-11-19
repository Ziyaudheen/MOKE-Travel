import React, { useEffect, useState } from "react";
import location from "../COMPONENTS/images/place.svg";
import place from "../COMPONENTS/images/2023-08-17.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

import "../App.css";

export default function Place() {






  const [data, setData] = useState([]);
  const [gallery,setGallery] = useState([])
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
        setGallery(response.data.data.gallery)
      });
  },[]);

 
  return (
    <>
    <Helmet>
      <title>{`${data.name} |MOKE travel`}</title>
    </Helmet>
    <div className="place">
      
      {/* <h1>{id}</h1> */}
      <h1>{data.name}</h1>
      <div className="top">
        <h6>{data.category_name}</h6>
        <img src={location} alt="" className="location" />
        <span>{data.name}</span>
      </div>
      <div className="middle">
        <div className="left">
          <img src={data.image} alt="" />
        </div>
        <div className="right">
          <ul>
            {gallery.map((pic) => (
                 <li key={pic.id}>
                 <div className="img_container">
                   <img src={pic.image} alt="" />
                 </div>
               </li>
            ))}
           
            
          </ul>
        </div>
      </div>
      <div className="bottom">
        <h1>Place Details</h1>
        <p>{data.description}</p>
      </div>
    </div>
    </>
  );
}
