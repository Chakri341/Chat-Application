import React from "react";
import MainContainer from "./main_container/MainContainer";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-3/4 mx-auto h-full">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Home;
