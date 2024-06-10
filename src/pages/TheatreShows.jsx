import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import TheatreCard from "../components/TheatreCard";
import Loader from "../components/Loader.jsx";
import MovieCard from "../components/MovieCard.jsx";


export const TheatreShows = () => {
  const [movieList, setMovieList] = useState({});
  const [loading, setLoading] = useState(true);
  const { stateParam, theatrename} = useLocation().state;

  useEffect(()=>{
    axios.get(`https://movie-apis-thqb.onrender.com/api/theatres/movies/${stateParam}`)
    .then((res)=>{
      setMovieList(res.data);
      setLoading(false);
      
    })

  })

  if (loading) return <div><Loader/></div>;

  return (
    <div className="top-container">
      <h1 className="page-head">
        <div className="v-line"></div>Shows In {theatrename}
      </h1>
      <div className="card-container">
        {movieList.length>0?
          <div className="cards">
            {movieList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} theatreid={stateParam} theatrename={theatrename}/>
            ))}
          </div>:<div className="no">No Shows Available</div>
        }
        </div>
    </div>
  );
};

export default TheatreShows;
