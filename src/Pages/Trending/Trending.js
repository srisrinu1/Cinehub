import React,{useState,useEffect} from 'react';
import useFetch from './../../hooks/useFetch';
import {env} from '../../config/AppConfig'
import axios from 'axios';
import http from '../../Core/Axios';
import SingleContent from '../../components/SingleContent/SingleContent';


const Trending = () => {
  const [page,setPage] =useState(2);
   const [content,setContent] =useState([]);
   const trendingUrl=`trending/all/day`
  
   const {response}=useFetch(trendingUrl,`page=${page}`);
   if(response){
     var results=response.results;
   }
  setTimeout(()=>{
    setContent(results);
  },0);
   
  
   
  

   

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
  <div className="trending">
    {content && content.length}
    <SingleContent/>
  <ul>
     {content && content.map((c)=>(
      <SingleContent 
        key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
      />
     )
     )}
     </ul>
  </div>
  </div>
};

export default Trending;
