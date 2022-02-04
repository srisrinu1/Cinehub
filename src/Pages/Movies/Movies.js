import React,{useState} from 'react';
import useFetch from './../../hooks/useFetch';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import '../Trending/Trending.css';

const Movies = () => {
  
  const [page,setPage]=useState(1);
  const [content,setContent]=useState([]);
  const [numOfPages,setNumOfPages]=useState();
  const [genres,setGenres]=useState([]);
  const [selectedGenres,setSelectedGenres]=useState();
  const moviesURL=`discover/movie`
  const {response}=useFetch(moviesURL,`language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  if(response){
    var results=response.results;
    var pages=response.total_pages;
  
  }
  setTimeout(()=>{
    setContent(results);
    setNumOfPages(pages);
    
    
  },0);
  
    
 
  
  return <div>
  <span className="pageTitle">Discover Movies</span>
  <Genres type="movie" 
    selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
  />
  <div className="trending">
  {content && content.map((c)=>(
      <SingleContent 
        key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
      />
     )
     )}
     </div>
     <CustomPagination setPage={setPage} numOfPages={500}/>
  </div>
};

export default Movies;
