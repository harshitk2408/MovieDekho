import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import TheatreCard from "../components/TheatreCard";
import Loader from "../components/Loader.jsx";
import TheatreShowCard from "../components/TheatreShowCard.jsx";

export const Shows = () => {
  const [theatreList, setTheatreList] = useState({});
  const [loading, setLoading] = useState(true);
  const { stateParam, moviename, lead, director, theatreid, theatrename } =
    useLocation().state;
  console.log(theatreid, theatrename, stateParam);
  theatreid
    ? useEffect(() => {
        axios
          .get(
            `https://movie-apis-thqb.onrender.com/api/theatres/shows/${theatreid}/${stateParam}`
          )
          .then((res) => {
            setTheatreList(res.data);
            setLoading(false);
          });
      }, [])
    : useEffect(() => {
        axios
          .get(
            `https://movie-apis-thqb.onrender.com/api/movies/shows/${stateParam}`
          )
          .then((res) => {
            setTheatreList(res.data);
            setLoading(false);
          });
      }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  // theatreList["Wave Cinemas"].map((theatre)=> console.log(theatre));
  return (
    <div className="top-container">
      {theatreid ? (
        <h1 className="page-head">
          <div className="v-line"></div>Shows for {moviename} in {theatrename}
        </h1>
      ) : (
        <h1 className="page-head">
          <div className="v-line"></div>Shows for {moviename}
        </h1>
      )}

      {theatreid ? (
        ""
      ) : (
        <div>
          <h3 className="movie-deets">Starring: {lead}</h3>
          <h3 className="movie-deets">Directed By: {director}</h3>
        </div>
      )}
      <div>
        {theatreid ? (
            <div className="card-container">
              <div className="cards">
              {theatreList.map((theatre) => (
                <TheatreShowCard key={theatre._id} theatre={theatre}/>
              ))}
            </div>
            </div>
        ) : (
          <div>
            <div className="card-conatiner">
              {theatreList["PVR Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>PVR Cinemas</h2>
                  {theatreList["PVR Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"PVR Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Wave Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Wave Cinemas</h2>
                  {theatreList["Wave Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            
            <div className="card-container">
              {theatreList["Cinepolis"].length > 0 ? (
                <div className="cards">
                  <h2>Cinepolis</h2>
                  {theatreList["Cinepolis"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Cinepolis"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Carnival Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Carnival Cinemas</h2>
                  {theatreList["Carnival Cinemas"].map((movie) => (
                    <TheatreShowCard
                      theatre={movie}
                      name={"Carnival Cinemas"}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Vox Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Vox Cinemas</h2>
                  {theatreList["Vox Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Vox Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["PVR Priya"].length > 0 ? (
                <div className="cards">
                  <h2>PVR Priya</h2>

                  {theatreList["PVR Priya"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"PVR Priya"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Sapphire Cineplex"].length > 0 ? (
                <div className="cards">
                  <h2>Sapphire Cineplex</h2>

                  {theatreList["Sapphire Cineplex"].map((movie) => (
                    <TheatreShowCard
                      theatre={movie}
                      name={"Sapphire Cineplex"}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Bookmyshow Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Bookmyshow Cinemas</h2>

                  {theatreList["Bookmyshow Cinemas"].map((movie) => (
                    <TheatreShowCard
                      theatre={movie}
                      name={"Bookmyshow Cinemas"}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Cineco Multiplex"].length > 0 ? (
                <div className="cards">
                  <h2>Cineco Multiplex</h2>

                  {theatreList["Cineco Multiplex"].map((movie) => (
                    <TheatreShowCard
                      theatre={movie}
                      name={"Cineco Multiplex"}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["M2K Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>M2K Cinemas</h2>

                  {theatreList["M2K Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Miraj Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Miraj Cinemas</h2>

                  {theatreList["Miraj Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Brightland Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Brightland Cinemas</h2>

                  {theatreList["Brightland Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Fun Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Fun Cinemas</h2>

                  {theatreList["Fun Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Metro Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Metro Cinemas</h2>

                  {theatreList["Metro Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["DT Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>DT Cinemas</h2>

                  {theatreList["DT Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Movietime Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Movietime Cinemas</h2>

                  {theatreList["Movietime Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Inox Leisure"].length > 0 ? (
                <div className="cards">
                  <h2>Inox Leisure</h2>

                  {theatreList["Inox Leisure"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Cineplex Multiplex"].length > 0 ? (
                <div className="cards">
                  <h2>Cineplex Multiplex</h2>

                  {theatreList["Cineplex Multiplex"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Delite Cinema"].length > 0 ? (
                <div className="cards">
                  <h2>Delite Cinema</h2>

                  {theatreList["Delite Cinema"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Cinemax Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Cinemax Cinemas</h2>

                  {theatreList["Cinemax Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["DLF Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>DLF Cinemas</h2>

                  {theatreList["DLF Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["SRS Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>SRS Cinemas</h2>
                  {theatreList["SRS Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Antilia Cinemas"].length > 0 ? (
                <div className="cards">
                  <h2>Antilia Cinemas</h2>

                  {theatreList["Antilia Cinemas"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Cinemall Multiplex"].length > 0 ? (
                <div className="cards">
                  <h2>Cinemall Multiplex</h2>

                  {theatreList["Cinemall Multiplex"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-container">
              {theatreList["Cinemax Srinagar"].length > 0 ? (
                <div className="cards">
                  <h2>Cinemax Srinagar</h2>

                  {theatreList["Cinemax Srinagar"].map((movie) => (
                    <TheatreShowCard theatre={movie} name={"Wave Cinemas"} />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
