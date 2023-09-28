import React from "react";
import "./home.css";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrollDown";

const Home = () => {
  return (
    <section className="home selection" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__image home_img"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
