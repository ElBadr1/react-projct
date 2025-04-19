import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Helmet } from "react-helmet";

export default function Movie() {
  const [data, setdata] = useState([]);
  const [type, settype] = useState("day");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/${type}?api_key=8494c70d32335f06e505959598e8ff8c`
      )
      .then((response) => {
        setdata(response.data.results);
        console.log(response.data);
      });
  }, [type]);
  // let i = 0;
  // <Link className="nav-link active" to="movie">
  //   Movies
  // </Link>;

  return (
    <>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <div className="container mt-3">
        <div className="row justify-content-between mt-4">
          <h2
            className="col-md-3 text-danger btn btn-outline-danger"
            onClick={() => {
              settype("day");
            }}
          >
            Trending Day
          </h2>
          <h2
            className="col-md-3 text-danger btn btn-outline-danger"
            onClick={() => {
              settype("week");
            }}
          >
            Trending Week
          </h2>
        </div>
        <div className="row">
          <h3 className="mt-3 h2 text-capitalize">Trending {type}</h3>
          {data.map((el) => {
            return <Card data={el} />;
          })}
        </div>
      </div>
    </>
  );
}
