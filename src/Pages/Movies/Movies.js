import React,{useState, useEffect} from 'react';
import useFetch from './../../hooks/useFetch';
import useGenre from './../../hooks/useGenre';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import '../Trending/Trending.css';

const Movies = () => {
  
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const moviesURL=`discover/movie`;
  const genreURL=useGenre(selectedGenres);
  const {response,Loading}=useFetch(moviesURL,`language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
  if(response){
    var results=response.results;
    var pages=response.total_pages;
  
  }
  
useEffect(() => {
  setTimeout(()=>{
    setContent(results);
    setNumOfPages(pages);
    
    
  },0);
},[genreURL,page,results])
 
    

 
  const Layout=<>
   
      <div className="trending">
        {content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type="movie"
            vote_average={c.vote_average} />
        )
        )}
      </div>
     
  </>
 
  
  return <div>
     <Genres
      type="movie"
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage} />
     {Loading && <p style={{textAlign:'center'}}>Loading...</p>}
    {!Loading && Layout}
    {!Loading &&  <CustomPagination setPage={setPage} numOfPages={500} />}
     
  </div>
};

export default Movies;
