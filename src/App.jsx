import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsProducts from "./pages/ProjectsProducts";
import ArtHistory from "./pages/ArtHistory";
import Infrastructure from "./pages/Infrastructure";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnquiryPopup from "./components/EnquiryPopup";
import ArtWorksPage from "./pages/ArtWorks";
import Exhibitions from "./pages/Exhibitions";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage to see if the modal was already shown
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem("modalShown", "true");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showModal && <EnquiryPopup onClose={handleCloseModal} setShowModal={setShowModal} />}
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects-products" element={<ProjectsProducts />} />
          <Route path="/artworks" element={<ArtWorksPage />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/art-history" element={<ArtHistory />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>

    <Footer />
  </div>
  )
};

export default App;
