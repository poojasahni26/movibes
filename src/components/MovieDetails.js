import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../lib/tmdb';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id).then(setMovie);
    }
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main className="details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map((g) => g.name).join(', ')}</p>
      <p>Rating: {movie.vote_average} | {movie.vote_count} votes</p>
      <button>See Showtimes</button>
      <button>More Watch Options</button>
    </main>
  );
}

export default MovieDetails;