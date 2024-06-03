import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit} id="form">
          <input
            type="text"
            className="search"
            id="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </header>
      <main id="main">
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </main>
    </div>
  );
}

export default App;
