import "./App.css";
import Shows from "./Components/Shows/Shows";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Movie from "./Components/Shows/Movie/Movie";
import Tv from "./Components/Shows/TV/Tv";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Shows /> },
        { path: "movie", element: <Movie /> },
        { path: "tv", element: <Tv /> },
      ],
    },
  ]);
  // // return (
  // //   <>
  // //     {/* <h2>asdfsaf</h2> */}
  // //     <Navbar />
  // //     <div className="container mt-3">
  // //       <div className="row">
  // //         <Shows />
  // //       </div>
  // //     </div>
  // //     <Footer />
  // //     {/* <div className="container mt-3">
  // //       <div className="row">
  // //         <Movie />
  // //       </div>
  // //     </div>
  // //     <div className="container mt-3">
  // //       <div className="row">
  // //         <Tv />
  // //       </div>
  // //     </div> */}
  // //   </>
  // // );
  return <RouterProvider router={routes} />;
  // return <Layout/>
}
