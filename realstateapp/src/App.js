import React from "react";
import { Home } from "./components/home";
import { Route, Routes } from "react-router-dom";
import { Favourites } from "./components/favourites";
import { Navbar } from "./components/navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourite" element={<Favourites />}></Route>
      </Routes>
    </div>
  );
};

export default App;
