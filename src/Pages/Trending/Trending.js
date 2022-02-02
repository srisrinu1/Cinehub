import React,{useState,useEffect} from 'react';
import useFetch from './../../hooks/useFetch';
import {env} from '../../config/AppConfig'
import axios from 'axios';
import http from '../../Core/Axios';

const trendingUrl=`trending/all/day`
const Trending = () => {
   const [content,setContent] =useState([]);
  
   const {response}=useFetch(trendingUrl);
   if(response){
    console.log(response);
   }
   
  
   
  

   

  //  const fetchTrendingData =async()=>{
     
   
  //   const {data}=await http.get(trendingUrl,{
  //     params:{ api_key: apiKey },
  //   });
  //   console.log(data);
    
   
  //  };
  //  useEffect(()=>{
  //   fetchTrendingData();
  //  },[])


   
    
  
  return <div>
  <span className="pageTitle">Trending</span>
  </div>
};

export default Trending;
