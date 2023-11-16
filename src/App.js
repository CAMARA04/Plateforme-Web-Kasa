import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Erreur from "./pages/Erreur";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import React from "react";
import "./app.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Erreur />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
