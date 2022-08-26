import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search/:searchTerm' element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
