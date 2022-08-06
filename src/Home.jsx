import React from "react";
import Analytics from "./Components/Analytics";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const Home = () => {
  return (
    <div class="container-fluid">
      <div class="row sidebar">
        <Sidebar />
        <div class="col-md-10">
          <Navbar />
          <Main />
          <div class="linebreak"></div>
          <Analytics />
          <div className="blank"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
