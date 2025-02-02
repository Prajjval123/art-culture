import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsProducts from "./pages/ProjectsProducts";
import ArtHistory from "./pages/ArtHistory";
import Infrastructure from "./pages/Infrastructure";
import Login from "./pages/Login";
import ArtWorks from "./pages/ArtWorks";
import Exhibition from "./pages/Exhibition";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects-products" element={<ProjectsProducts />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/art-history" element={<ArtHistory />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>

    <Footer />
  </div>
);

export default App;
