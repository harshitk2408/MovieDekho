import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./movies.css";
import axios from "axios";
import Loader from "../components/Loader";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  //axios request function
  useEffect(() => {
    axios.get("https://movie-apis-thqb.onrender.com/api/movies").then((res) => {
      setMovies(res.data);
      setLoading(false);
    });
  });
  if (loading)
    return (
      <div>
        <Loader/>
      </div>
    );
  return (
    <div className="top-container">
      <div className="mid-con">
        <h1 className="page-head">
          <div className="v-line"></div>Now Showing
        </h1>
        <div className="card-container">
          {
            <div className="cards">
              {movies.map((movie) => (
                <MovieCard key={movie.movie_id} movie={movie} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Movies;
