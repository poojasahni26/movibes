import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../lib/tmdb';
import MovieCard from './MovieCard'; 
import Head from 'next/head';
import Link from 'next/link';
import '../styles/Home.css';
import '../styles/Header.css';



function Header() {
  return (
    <>
      <header className="search-header">
        <div className="search-bar">
          <input type="text" placeholder="Search for movies, TV shows..." />
        </div>
      </header>

      <aside className="sidebar">
        {/* ...your sidebar content like nav links, promo, etc... */}
      </aside>
    </>
  );
}

export default function Home() {
  const [movies, setMovies] = useState<Movie>([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <Head>
        <title>Movibes | Home</title>
      </Head>

      <div className="home-layout">
        <Header />

        <main className="main-content">
          <aside className="filters top-right">
            <div className="filter-group">
              <h3>Categories</h3>
              {['Action', 'Adventure', 'Animated', 'Comedy', 'Crime', 'Fantasy'].map((cat) => (
                <label key={cat}>
                  <input type="checkbox" defaultChecked /> {cat}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Services</h3>
              {['Netflix', 'Prime Video', 'Disney+', 'HBO Max', 'Hulu', 'Starz'].map((service) => (
                <label key={service}>
                  <input type="checkbox" defaultChecked /> {service}
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Filters</h3>
              <select defaultValue="">
                <option value="">Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="thrilling">Thrilling</option>
              </select>
              <br />
              <select defaultValue="">
                <option value="">Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
              <br />
              <select defaultValue="">
                <option value="">Language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
              <br />
              <select defaultValue="">
                <option value="">Age Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
              </select>
            </div>
          </aside>

          <section className="trending">
            <h2>Trending</h2>
            <div className="grid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}