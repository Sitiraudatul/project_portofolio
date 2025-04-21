// src/App.js
import React, { useEffect } from "react";
import bgImage from "./assets/images/mainbg.jpeg"; // pastikan path-nya sesuai struktur folder

import Header from "./components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
