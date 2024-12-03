import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Footer from "./components/Footer";
import Login from "./login";
import Product from "./Product";
import About from "./About";
import VideoCarousel from "./carousel";
import ThankYou from "./ThankYou";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <VideoCarousel />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/thank-you" element={<ThankYou />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
