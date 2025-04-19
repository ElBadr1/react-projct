import React from "react";

export default function Card(props) {
  let { data } = props;
  const BASE_URL = "https://image.tmdb.org/t/p/w500"; //MACRO IF I need to make a constant value to use it in all projct make it UPPER CASE

  return (
    <div className="col-lg-2 col-md-4 p-2 ">
      <div className="border border-danger border-1 rounded-2 card shadow">
        <div className="card-img">
          <a
            data-bs-toggle="collapse"
            href={`#${data.id}`}
            // role="button"
            // aria-expanded="false"
            aria-controls={data.id}
          >
            <img
              src={BASE_URL + data.poster_path}
              title={data.title ?? data.name}
              alt={data.title ?? data.name}
            />
          </a>
        </div>
        <div class="collapse multi-collapse" id={data.id}>
          <div class="cardo">
            <div className="card-title">
              <h5 className="text-center pt-2 text-danger">
                {data.title ?? data.name}
              </h5>
            </div>
            <h6 className="p-1 text-primary">{data.overview}</h6>
            <h6 className="p-1 text-danger">
              {"Country: " + data.origin_country}
            </h6>
            <h6 className="p-1 text-primary">
              {"Vote Average: " + data.vote_average}
            </h6>
            <h6 className="p-1 text-danger">
              {"Vote Count: " + data.vote_count}
            </h6>
            <h6 className="p-1 text-primary">
              {"Date: " + (data.release_date ?? data.first_air_date)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
