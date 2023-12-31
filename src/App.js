import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erreur from "./pages/Erreur/Erreur";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import "./app.scss";
import Logement from "./pages/Logement/Logement";
const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Erreur />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
