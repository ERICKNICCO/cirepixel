import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qalification/Qualification";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}

export default App;
