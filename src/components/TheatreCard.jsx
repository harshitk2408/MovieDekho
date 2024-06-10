import React from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";

const TheatreCard = ({ theatre }) => {
  return (
    <Link
      to="/theatreshows"
      state={{ stateParam: theatre.theatre_id, theatrename: theatre.name }}
      className="links"
    >
      <div className="card-con">
        <div className="card-front" key={theatre.theatre_id}>
          <div className="f-theatres">
            <div className="f-upper">
              <div>
                <h1>{theatre.name}</h1>
              <div><h3>Address: {theatre.address},{theatre.state}</h3></div>
              </div>
            </div>
            <div className="f-upper deets">
              <div>Total Screens: {theatre.total_screens}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TheatreCard;
