import './App.css';
import { Conteiner, MoveList, Movie } from './style.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=781babdf17f3402fe442faacb684f98b&language=en-US&page=1")
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
      })
  }, [])

  return (
    <Conteiner>
      <h1>Today Popular Movies</h1>
      <MoveList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}`} /></Link>
              <span>{movie.title}</span>
              <span>Rate: {movie.vote_average}</span>
              <span>Votes: {movie.vote_count}</span>
            </Movie>
          )
        })}
      </MoveList>
    </Conteiner>
  );
}

export default App;
