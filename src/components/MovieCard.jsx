import React from 'react'
import './moviecard.css'
import { Link, Navigate } from 'react-router-dom'

export const MovieCard = ({movie, theatreid, theatrename}) => {
  return (
    <Link to='/shows' state={{stateParam: movie.movie_id, moviename: movie.movie_name, lead:movie.lead_actor, director:movie.director, theatreid:theatreid, theatrename: theatrename}} className='links'><div className="card-con">
    <div className="card-front" key={movie.movie_id}>
      <div className="image">
        {
          <img
            src={movie.poster?movie.poster:'https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false'}
            alt={`${movie.movie_name} Poster`}
            width="200"
            height="300"
          />
        }
      </div>
      <div className="f">
        <div className="f-upper">
          <div>{movie.movie_name}</div>
        </div>
      </div>
    </div>
  </div></Link>
  )
}

export default MovieCard
