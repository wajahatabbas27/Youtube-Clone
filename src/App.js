import React from "react";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
