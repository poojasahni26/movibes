import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../lib/tmdb';
import MovieCard from '../components/MovieCard';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <aside className="sidebar">
     <img src="/image/movibes-logo.png" alt="Movibes Logo" className="logo-image" />
     
      <nav>
    <Link href="/" className="nav-link">
      <div className="nav-item">
        <img src="/image/1.png" alt="Home Logo" className="nav-icon" />
        <div className="Home"> Home </div>
      </div>
    </Link>


    

<Link href="/movies" className="nav-link">
  <FontAwesomeIcon icon={faFilm} className="nav-icon" />
  <div className="Movies"> Movies </div>
</Link>


<Link href="/tv-shows" className="nav-link">
  <FontAwesomeIcon icon={faTv} className="nav-icon" />
  <div className="TV-Series"> TVSeries </div>
</Link>

  

<Link href="/upcoming" className="nav-link">
  <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
  <div className="Upcoming">  Upcoming </div>
</Link>

      </nav>

  

    <div className="promo">
  <img src="/image/download.png" alt="Promo Icon" className="promo-icon" />
  <p>Play movie quizzes <br />
    and earn
    <br /> free tickets</p>
  <p>50k people are playing
    <br /> now</p>
  <button>Start playing</button>
</div>
<br />
<br />  
<br />
<br />  
<br />
<br />  


<Link href="/login" className="nav-link">
  <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
  <div className="Logout"> Logout </div>
 
</Link>

    </aside>

    
  );
}

export default function Home() {
  const [movies, setMovies] = useState([]);

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
           <div className="top-icons">
  <img src="/image/bell.png" alt="Notifications" className="bell-icon" />
  <img src="/image/profile.png" alt="User profile" className="profile-icon" />
</div>

<div className="header-row">
  <h3>Categories</h3>
  <h5>Uncheck all</h5>
</div>
            <div className="filter-group">
  <div className="filter-header">
    
  </div>

 <div className="category-list">
  {['Action', 'Adventure', 'Animated', 'Comedy', 'Crime', 'Fantasy'].map((cat) => (
    <label key={cat} className="category-item">
      {cat} <input type="checkbox" defaultChecked />
    </label>
  ))}
</div>

  <div className="see-more1">
    <button>See more</button>
  </div>
</div>
 <div className="header-row">
  <h3>Services</h3>
  <h5>Uncheck all</h5>
</div>
           <div className="filter-group">
  <div className="filter-header">
  </div>

  <div className="checkbox-list">
  {['Netflix', 'Prime Video', 'Disney+', 'HBO Max', 'Hulu', 'Starz'].map((service) => (
    <label key={service} className="checkbox-item">
      {service} <input type="checkbox" defaultChecked />
    </label>
  ))}
</div>

  <div className="see-more">
    <button>See more</button>
  </div>
</div>

<div className="filter-group">
  <h3>Filters</h3>

  <select defaultValue="" className="filter-select">
    <option value="">Mood</option>
    <option value="happy">Happy</option>
    <option value="sad">Sad</option>
    <option value="thrilling">Thrilling</option>
  </select>

  <select defaultValue="" className="filter-select">
    <option value="">Year</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
    <option value="2023">2023</option>
  </select>

  <select defaultValue="" className="filter-select">
    <option value="">Language</option>
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
  </select>

  <select defaultValue="" className="filter-select">
    <option value="">Age Rating</option>
    <option value="G">G</option>
    <option value="PG">PG</option>
    <option value="PG-13">PG-13</option>
    <option value="R">R</option>
  </select>
</div>
          </aside>
    <header className="search-header">
        <div className="search-bar">
          <input type="text" placeholder="Search for movies, TV shows..." />
        </div>
      </header>

      <div className="Hero-section">
  <img src="/image/Hero.png" alt="Hero" className="Hero-icon" />
</div>
    <section className="trending">
  <h2>Trending</h2>
  <div className="grid">
    {movies.slice(0, 4).map((movie) => (
      <div className="grid-item" key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
</section>

<section className="Upcoming">
            <h2>Upcoming</h2>
            <div className="grid">
    {movies.slice(0, 5).map((movie) => (
      <div className="grid-item" key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
          </section>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
 <section className="Tv-Series">
            <h2>Tv-Series</h2>
            <div className="grid">
    {movies.slice(0, 5).map((movie) => (
      <div className="grid-item" key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
          </section>




        </main>
      </div>
    </>
  );
}