import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
const REACT_APP_MOVIES_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${REACT_APP_MOVIES_API_KEY}`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(res => res.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      })
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${REACT_APP_MOVIES_API_KEY}`)
      .then(res => res.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        }
        else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
  }

  return (
    <div className="App">
      <Header text="Hooked on Movies" />
      <Search search={search} />
      <p className="App-intro">Enjoy</p>
      <div className="movies">
        {loading && !errorMessage ? 
          (<span>loading...</span>) :
          errorMessage ?
          (<div className="errorMessage">{errorMessage}</div>) : 
          (movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          )))
        }
      </div>
    </div>
  )
}

export default App;