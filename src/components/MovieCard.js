import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard({ movie }) {
  const tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;

  return (
    <a
      href={tmdbUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}/10</p>
      </div>
    </a>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};