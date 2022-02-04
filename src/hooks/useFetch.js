import React,{useState,useEffect,useCallback} from 'react';
import http from "../Core/Axios";

const useFetch = (url,param) => {
    const [response,setResponse]=useState(null);
    const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);
    const apiKey= process.env.REACT_APP_API_KEY;

      const URL=url+`?api_key=${apiKey}&${param}`
        const fetchData = async () => {
            try {
              const {data} = await http.get(URL,{
                 
              });
              setResponse(data);
            
            } catch (error) {
              setError(error);
            }
          };
        
       
   useEffect(()=>{
      fetchData();
   },[URL,apiKey])
  // useEffect(useCallback(()=>{
  //   fetchData();
  // },[url,apiKey])
  // ,[]);       
       
        
   
   
  return {
      response,
  }
  
};

export default useFetch;