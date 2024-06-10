import React from "react";
import "./moviecard.css";

const TheatreShowCard = ({ theatre }) => {
  return (
    <div className="card-con">
      <div className="card-front">
        <div className="f-show">
          <div className="f-upper"></div>
          <div className="f-upper deets">
              <div className="date">{theatre.show_date.slice(0, 10)}</div>
          </div>
              <div className="time">{theatre.show_time.slice(0, 5)}</div>
        </div>
      </div>
    </div>
  );
};

export default TheatreShowCard;
