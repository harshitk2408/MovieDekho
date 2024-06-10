import React, { useState, useEffect } from "react";
import axios from "axios";
import TheatreCard from "../components/TheatreCard";
import Loader from "../components/Loader";
// import TheatreShowCard from '../components/TheatreShowCard';

export const Theatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://movie-apis-thqb.onrender.com/api/theatres")
      .then((res) => {
        setTheatres(res.data);
        setLoading(false);
      });
  },[]);
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="top-container">
      <h1 className="page-head">
        <div className="v-line"></div>Partner Theatres
      </h1>
      <div className="card-container">
        {
          <div className="cards">
            {theatres.map((theatre) => (
              <TheatreCard key={theatre.movie_id} theatre={theatre} />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Theatres;
