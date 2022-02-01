import React,{useState,useEffect} from 'react';
import {env} from '../../config/AppConfig'
import axios from 'axios';
import http from '../../Core/Axios';


const Trending = () => {
   const [content,setContent] =useState([]);
   const apiKey = process.env.REACT_APP_API_KEY;
  //  console.log(process.env)
  //  console.log(apiKey);
   
   const trendingUrl=`trending/all/day`

   

   const fetchTrendingData =async()=>{
     
    // const {data} = await axios.get(
    //   `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    // );
    // console.log(data);
    // const apiKey = process.env.REACT_APP_API_KEY;
    const {data}=await http.get(trendingUrl,{
      params:{ api_key: apiKey },
    });
    console.log(data);
    // http
    //     .get(trendingUrl, {
    //       params: { api_key: apiKey },
    //     })
    //     .then((response) => console.log(response.data))
    
   
   };
   useEffect(()=>{
    fetchTrendingData();
   },[])

   
    
  
  return <div>
  <span className="pageTitle">Trending</span>
  </div>
};

export default Trending;
