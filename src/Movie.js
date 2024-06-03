import React from 'react';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 7) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getClassByRate(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};

export default Movie;
