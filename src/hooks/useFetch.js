import React,{useState,useEffect,useCallback} from 'react';
import http from "../Core/Axios";

const useFetch = (url) => {
    const [response,setResponse]=useState(null);
    const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = React.useState(false);
    const apiKey= process.env.REACT_APP_API_KEY;
useEffect(() => {
   
        const fetchData = async () => {
            try {
              const {data} = await http.get(url,{
                  params:{api_key: apiKey}
              });
              setResponse(data);
            
            } catch (error) {
              setError(error);
            }
          };
          fetchData();
        
   
        },[url,apiKey]);
  return {
      response,
  }
  
};

export default useFetch;
