import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Shows from "../Shows/Shows";
import { Offline, Online } from "react-detect-offline";
// import Input from "../Input/Input";
// import style from "./Layout.module.css";
import { Helmet } from "react-helmet";

export default function Layout() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Shows />
      <Outlet></Outlet>
      <Footer />
      {/* <Online>
        <h1 className="">
          <Input type= 'number' name= 'userNumber' placeholder= 'Please, Enter Your Number' style={style.num}/>
          <Input type= 'text' name= 'userName' placeholder= 'Please, Enter Your Name' style={style.name}/>
          <Input type= 'email' name= 'useremail' placeholder= 'Please, Enter Your Email' style={style.email}/>
          <Input type= 'password' name= 'userpassword' placeholder= 'Please, Enter Your Password' style={style.pass}/>
        </h1>
      </Online>
      <Offline>
        <h1 className="">"OPPS YOU ARE Offline"</h1>
      </Offline> */}
    </>
  );
}
