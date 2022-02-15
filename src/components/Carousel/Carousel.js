import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {env} from "../../config/AppConfig";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousel = (props) => {
  const [credits, setCredits] = useState([]);
  const URL=`${props.media_type}/${props.id}/credits`;
  const {response}=useFetch(URL,`language=en-US`);
 
  const items = credits?.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${env.imageUrl_500}/${c.profile_path}` : env.unavailable}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = () => {
   
    setTimeout(() =>{
      setCredits(response.cast);
    },0);
  
  };

 
    fetchCredits();
    // eslint-disable-next-line
 

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Carousel;