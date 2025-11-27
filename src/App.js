import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import Upcoming from './components/Upcoming';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;