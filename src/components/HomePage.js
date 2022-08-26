import React from "react";
import RecommendedVideos from "./RecommendedVideos";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <div className="flex">
      <SideBar />
      <RecommendedVideos />
    </div>
  );
};

export default HomePage;
