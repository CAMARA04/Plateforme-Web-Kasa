import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React from "react";
import "./app.scss";
import "./styles/index.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />

        <Routes>
          {/* <Route path="/" element={<Accueil />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Erreur />} /> */}
        </Routes>
      </div>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
