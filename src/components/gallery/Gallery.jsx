import React from "react";
import "./gallery.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
const Gallery = () => {
  return (
    <section className="gallery section" id="portfolio">
      <h2 className="section__title">Discover My Creations</h2>
      <span className="section__subtitle">
        Browse through a diverse range of projects, each with its unique story
        and creative process. <br></br>From eye-catching visual identities to
        stunning digital illustrations.
      </span>
      <div className="images">
        <div className="image">
          <img src={image1} alt="Project 1" />
        </div>
        <div className="image">
          <img src={image2} alt="Project 1" />
        </div>
        <div className="image">
          <img src={image3} alt="Project 1" />
        </div>
        <div className="image">
          <img src={image4} alt="Project 1" />
        </div>
        <div className="image">
          <img src={image5} alt="Project 1" />
        </div>
        <div className="image">
          <img src={image6} alt="Project 1" />
        </div>
        {/* Add more images as needed */}
      </div>
      {/* Additional content for your gallery section */}
    </section>
  );
};

export default Gallery;
