// Movies.js
import React, { useState } from 'react';
// import './Movie.css';
import '../App.css'
import spiderMan from '../Media/movieimg.png';
import tenet from '../Media/tenet.avif';
import predestination from '../Media/predestination.jpg';
import nohardfeelings from '../Media/nohardfeelings.jpg';
import suzume from '../Media/suzume.webp';

function Movie({ className }) {
  const movies = [
    {
      title: "NO HARD FEELINGS",
      director: "Gene Stupnitsky",
      year: "2023",
      duration: "1h 43m",
      quality: "HD VISION",
      audio: "5.1",
      description: "On the brink of losing her home, Maddie finds an intriguing job listing: wealthy helicopter parents looking for someone to bring their introverted 19-year-old son Percy out of his shell before college. She has one summer to make him a man or die trying.",
      image: nohardfeelings,
      tag: "Recently Added",
      rating: "R"
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      director: "VJERAN TOMIC",
      year: "2023",
      duration: "2h 20m",
      quality: "HD VISION",
      audio: "5.1",
      description: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
      image: spiderMan,
      tag: "Recently Added",
      rating: "16+"
    },
    {
      title: "Tenet",
      director: "Christopher Nolan",
      year: "2020",
      duration: "2h 30m",
      quality: "HD",
      audio: "Dolby Digital",
      description: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      tag: "Academy Award Winner",
      rating: "PG-13",
      image: tenet,
    },
    {
      title: "SUZUME",
      director: "Makoto Shinkai",
      year: "2022",
      duration: "2h 2m",
      quality: "HD VISION",
      audio: "5.1",
      description: "A 17-year-old girl named Suzume helps a mysterious young man close doors from the outer side that are releasing disasters all over Japan. After he gets transformed into a chair by a magical cat, they embark on a journey to prevent catastrophic earthquakes and save the country.",
      image: suzume,
      tag: "Award Winner",
      rating: "PG-13",
    },
    {
      title: "Predestination",
      director: "Michael and Peter Spierig",
      year: "2014",
      duration: "1h 37m",
      quality: "HD",
      audio: "5.1",
      description: "A temporal agent embarks on his final assignment using time travel to prevent crimes before they occur. While working as a bartender in 1970s New York, he meets a mysterious customer whose incredible life story sets off a complex journey that blurs the lines of past, present, and identity.",
      image: predestination,
      tag: "Sci-Fi Thriller",
      rating: "R",
    },
  ];

  const [activeMovie, setActiveMovie] = useState(0);

  return (
    <div className={className}>
      <div className="featured-movie">
        <div 
          className={`movie-backdrop ${className.includes('animate-exit') ? 'animate-zoom-out' : 'animate-zoom-in'}`}
          style={{ 
            backgroundImage: `url(${movies[activeMovie].image})`,
          }}
        >
          <div className="backdrop-overlay">
            <div className={`movie-info ${className.includes('animate-exit') ? 'animate-slide-out' : 'animate-slide-in'}`}>
              <div className="stream-tag">WEB FILM</div>
              {movies[activeMovie].director && (
                <div className="movie-director">{movies[activeMovie].director}</div>
              )}
              <h1 className="movie-title">{movies[activeMovie].title}</h1>
              <div className="movie-meta">
                {movies[activeMovie].year && <span>{movies[activeMovie].year}</span>}
                {movies[activeMovie].rating && <span>{movies[activeMovie].rating}</span>}
                {movies[activeMovie].duration && <span>{movies[activeMovie].duration}</span>}
                {movies[activeMovie].quality && <span>{movies[activeMovie].quality}</span>}
                {movies[activeMovie].audio && <span>{movies[activeMovie].audio}</span>}
              </div>
              {movies[activeMovie].description && (
                <p className="movie-description">{movies[activeMovie].description}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Movie Carousel  */}
      <div className={`movie-section2 ${className.includes('animate-exit') ? 'animate-fade-out' : ''}`}>
        <h2 className="section-title">Start Watching</h2>
        <div className="movie-carousel">
          {movies.map((movie, index) => (
            <div 
              key={index}
              className={`movie-card ${index === activeMovie ? 'active' : ''} ${
                className.includes('animate-exit') ? '' : 'animate-slide-up'
              }`}
              style={
                className.includes('animate-exit') 
                  ? {} 
                  : { animationDelay: `${0.1 + (index * 0.1)}s` }
              }
              onMouseEnter={() => setActiveMovie(index)}
            >
              <img src={movie.image} alt={movie.title} />
              {movie.tag && (
                <div className="card-tag">{movie.tag}</div>
              )}
              <div className="card-info">
                <h3>{movie.title}</h3>
                <div className="card-meta">
                  {movie.year && <span>{movie.year}</span>}
                  {movie.duration && <span>{movie.duration}</span>}
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
