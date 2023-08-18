import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Wrapper from "./sections/Wrapper";
import Background from "./components/Background";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/index.scss";
import Search from "./pages/Search";
import Pokemon from "./pages/Pokemon";
import MyList from "./pages/MyList";
import About from "./pages/About";
import Compare from "./pages/Compare";

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route element={<Search />} path="/search" />
          <Route element={<MyList />} path="/list" />
          <Route element={<About />} path="/about" />
          <Route element={<Compare />} path="/compare" />
          <Route element={<Pokemon />} path="/pokemon/:id" />
          <Wrapper />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
