

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





function Movies() {
  return (
    <main>
      <h2>All Movies</h2>
      <aside className="filters">
        <h3>Categories</h3>
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Comedy</li>
          <li>Crime</li>
        </ul>
        <h3>Services</h3>
        <ul>
          <li>Netflix</li>
          <li>Prime Video</li>
          <li>Disney+</li>
        </ul>
      </aside>
      <section className="movie-grid">
        {/* Map movie cards here */}
      </section>
      <aside className="filters">
  <h3>Categories</h3>
  <label><input type="checkbox" /> Action</label>
  <label><input type="checkbox" /> Adventure</label>
  <label><input type="checkbox" /> Animated</label>
  <label><input type="checkbox" /> Comedy</label>
  <label><input type="checkbox" /> Crime</label>
  <label><input type="checkbox" /> Fantasy</label>
  <button>See more</button>

  <h3>Services</h3>
  <label><input type="checkbox" /> Netflix</label>
  <label><input type="checkbox" /> Prime Video</label>
  <label><input type="checkbox" /> Disney+</label>
  <label><input type="checkbox" /> HBO Max</label>
  <label><input type="checkbox" /> Hulu</label>
  <label><input type="checkbox" /> Starz</label>
  <button>See more</button>
</aside>
    </main>
  );
}

export default Movies;