import React from "react";
import { Navbar } from "./Components/common/Navbar";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
