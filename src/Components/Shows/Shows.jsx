import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Movie from "./Movie/Movie";
import { Outlet } from "react-router-dom";

export default function Shows() {
  const [data, setdata] = useState([]);
  // const BASE_URL = "https://image.tmdb.org/t/p/w500"; //MACRO IF I need to make a constant value to use it in all projct make it UPPER CASE
  const [type, settype] = useState("movie");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=8494c70d32335f06e505959598e8ff8c`
      )
      .then((response) => {
        setdata(response.data.results);
        console.log(response.data);
      });
  }, [type]);
  //   return (
  //     <>
  //       <div className="row justify-content-between">
  //         <h2
  //           className="col-md-3 text-danger btn btn-outline-danger"
  //           onClick={() => {
  //             settype("movie");
  //           }}
  //         >
  //           Movies
  //         </h2>
  //         <h2
  //           className="col-md-3 text-danger btn btn-outline-danger"
  //           onClick={() => {
  //             settype("tv");
  //           }}
  //         >
  //           TV
  //         </h2>
  //       </div>
  //       <div className="row">
  //         {data.map((el) => {
  //           return (
  //             <div className="col-lg-2 col-md-4 p-2 ">
  //               <div className="border border-danger border-1 rounded-2 card">
  //                 <div className="card-img">
  //                   <img src={BASE_URL + el.poster_path} className="rounded-top-2 scale"/>
  //                 </div>
  //                 {/* <h6>{el.title ? el.title : el.name}</h6> */}
  //                 <div className="card-title">
  //                   <h5 className="text-center pt-2 text-danger">{el.title ?? el.name}</h5>
  //                 </div>
  //                 <h6 className="p-1 text-primary">{el.overview}</h6>
  //                 <h6 className="p-1 text-danger">{'Country: ' + el.origin_country}</h6>
  //                 <h6 className="p-1 text-primary">{'Vote Average: ' + el.vote_average}</h6>
  //                 <h6 className="p-1 text-danger">{'Vote Count: ' + el.vote_count}</h6>
  //                 <h6 className="p-1 text-primary">{'Date: ' + (el.release_date ?? el.first_air_date)}</h6>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </>
  //   )

  // return (
  //     <>
  //       <div className="row justify-content-between">
  //         <h2
  //           className="col-md-3 text-danger btn btn-outline-danger"
  //           onClick={() => {
  //             settype("movie");
  //           }}
  //         >
  //           Movies
  //         </h2>
  //         <h2
  //           className="col-md-3 text-danger btn btn-outline-danger"
  //           onClick={() => {
  //             settype("tv");
  //           }}
  //         >
  //           TV
  //         </h2>
  //       </div>
  //       <div className="row">
  //         {data.map((el) => {
  //           return (
  //             <div className="col-lg-2 col-md-4 p-2 ">
  //               <div className="border border-danger border-1 rounded-2 card">
  //                 <div className="card-img">
  //                     <a data-bs-toggle="collapse" href="#CollapseExample1" role="button" aria-expanded="false" aria-controls="CollapseExample1">
  //                         <img src={BASE_URL + el.poster_path} className="rounded-top-2 scale"
  //                          title={el.title ?? el.name} alt={el.title ?? el.name}/></a>
  //                 </div>
  //                 {/* <h6>{el.title ? el.title : el.name}</h6> */}
  //                 <div class="collapse multi-collapse" id="CollapseExample1">
  //                     <div class="card card-body">
  //                         <div className="card-title">
  //                             <h5 className="text-center pt-2 text-danger">{el.title ?? el.name}</h5>
  //                         </div>
  //                         <h6 className="p-1 text-primary">{el.overview}</h6>
  //                         <h6 className="p-1 text-danger">{'Country: ' + el.origin_country}</h6>
  //                         <h6 className="p-1 text-primary">{'Vote Average: ' + el.vote_average}</h6>
  //                         <h6 className="p-1 text-danger">{'Vote Count: ' + el.vote_count}</h6>
  //                         <h6 className="p-1 text-primary">{'Date: ' + (el.release_date ?? el.first_air_date)}</h6>
  //                     </div>
  //                 </div>

  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </>
  // )
  let i = 0;
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-between">
          <h2
            className="col-md-3 text-danger btn btn-outline-danger"
            onClick={() => {
              settype("movie");
            }}
          >
            Movies
          </h2>
          <h2
            className="col-md-3 text-danger btn btn-outline-danger"
            onClick={() => {
              settype("tv");
            }}
          >
            TV
          </h2>
        </div>
        <div className="row">
          <h3 className="mt-3 h2 text-capitalize">Trending {type}</h3>
          {() => (i = 0())}
          {data
            .filter(() => {
              return i++ < 6;
            })
            .map((el) => {
              return (
                // <div className="col-lg-2 col-md-4 p-2 ">
                //   <div className="border border-danger border-1 rounded-2 card shadow">
                //     <div className="card-img">
                //       <a
                //         data-bs-toggle="collapse"
                //         href={`#${el.id}`}
                //         // role="button"
                //         // aria-expanded="false"
                //         aria-controls={el.id}
                //       >
                //         <img
                //           src={BASE_URL + el.poster_path}
                //           title={el.title ?? el.name}
                //           alt={el.title ?? el.name}
                //         />
                //       </a>
                //     </div>
                //     <div class="collapse multi-collapse" id={el.id}>
                //       <div class="cardo">
                //         <div className="card-title">
                //           <h5 className="text-center pt-2 text-danger">
                //             {el.title ?? el.name}
                //           </h5>
                //         </div>
                //         <h6 className="p-1 text-primary">{el.overview}</h6>
                //         <h6 className="p-1 text-danger">
                //           {"Country: " + el.origin_country}
                //         </h6>
                //         <h6 className="p-1 text-primary">
                //           {"Vote Average: " + el.vote_average}
                //         </h6>
                //         <h6 className="p-1 text-danger">
                //           {"Vote Count: " + el.vote_count}
                //         </h6>
                //         <h6 className="p-1 text-primary">
                //           {"Date: " + (el.release_date ?? el.first_air_date)}
                //         </h6>
                //       </div>
                //     </div>
                //   </div>
                // </div>
                <Card data={el} />
              );
            })}
        </div>
      </div>
    {/* <Outlet></Outlet> */}

    </>
  );
}
