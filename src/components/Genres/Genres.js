import React,{ useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import { Chip } from "@material-ui/core";

const Genres = (props) => {

  const {type,selectedGenres,setSelectedGenres,genres,setGenres,setPage}=props;
  
  const genresURL=`genre/${type}/list`
  const {response}=useFetch(genresURL,`language=en-US`)
  if(response){
    var results=response.genres;
    var pages=response.total_pages;
  
  }
  console.log(results);

  
 useEffect(() =>{
  setTimeout(() => {
    setGenres(results);
   
  },0);
  
 },[results]);
 
  
 


  // console.log(selectedGenres);

  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
    
    
  }
   
  const handleRemove=(genre)=>{
    setSelectedGenres(
      selectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
    
  } 
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres && genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}

   
    </div>
  )
};

export default Genres;
