const API_KEY = '258526c1daa5e3887723e0f09eaa39d6';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch trending movies');
  return response.json();
}

export async function fetchMovieDetails(id: string) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch movie details');
  return response.json();
}