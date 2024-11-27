import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./assets/components/Navbar";
import { Home } from "./assets/pages/Home";
import { About } from "./assets/pages/About";
import { NotFound } from "./assets/pages/NotFound";
import { KocktailContext } from "./context/KocktailContext";
import { DetailsList } from "./assets/components/DetailsList";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <KocktailContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="details/:id" element={<DetailsList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </KocktailContext>
      </Router>
    </>
  );
};
