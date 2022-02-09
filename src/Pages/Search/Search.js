import React,{useState,useEffect} from 'react';
import {TextField,Button,Tab,Tabs} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import useFetch from '../../hooks/useFetch';

const Search = () => {
  const [type,setType] = useState(0);
  const [page,setPage] = useState(1);
  const [searchText,setSearchText] = useState("");
  const [content,setContent] = useState([]);
  const [numOfPages,setNumOfPages] = useState();
  const searchURL=`search/${type ? "tv" : "movie"}`
  const {response}=useFetch(searchURL,`language=en-US&query=${searchText}&page=${page}&include_adult=false`);
  if(response){
    var results=response.results;
    var pages=response.total_pages;
  }
  useEffect(() => {
    setTimeout(()=>{
      setContent(results);
      setNumOfPages(pages);
      
      
    },0);
  },[type, page, results, pages]);
  
  console.log(response);
  return (<div>
  <div style={{display:'flex'}}>
    <TextField
      style={{flex:1}}
      className="searchBox"
      label="search"
      variant="filled"
      onChange={(e) =>setSearchText(e.target.value)}
    />
     <Button
           
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
    
  </div>
  <Tabs value={type} 
  indicatorColor="primary"
   textColor="primary"
   onChange={(event, newValue)=>{
     setType(newValue);
     setPage(1);
   }}
   style={{paddingBottom:5}}>
    <Tab style={{ width: "50%" }}  label="Search Movies" />
    <Tab  style={{ width: "50%" }}  label="Search TV Series"/>

  </Tabs>
  </div>)
};

export default Search;
