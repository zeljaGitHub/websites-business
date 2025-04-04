import React from "react";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
    <div className="container">
      <div className="featured-projects">
        <div className="text-div">
          <h2>
            FEATURED <br /> PROJECTS
          </h2>
          <p>
            On this page, we proudly showcase some of the key collaborations and
            projects we've <br /> worked on, highlighting the successful
            partherships that have helped us grow and make a <br /> lasting
            impact.
          </p>
        </div>
        <div className="gallery">
          <div className="image-wrapper">
            <img src="gallery1.png" alt="Slika 1" />
            <div className="overlay">
              <h4>Naslov 1</h4>
              <p>Opis slike 1</p>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="gallery4.png" alt="Slika 2" />
            <div className="overlay">
              <h4>Naslov 2</h4>
              <p>Opis slike 2</p>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="gallery3.png" alt="Slika 3" />
            <div className="overlay">
              <h4>Naslov 3</h4>
              <p>Opis slike 3</p>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="gallery1.png" alt="Slika 4" />
            <div className="overlay">
              <h4>Naslov 4</h4>
              <p>Opis slike 4</p>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="gallery2.png" alt="Slika 5" />
            <div className="overlay">
              <h4>Naslov 5</h4>
              <p>Opis slike 5</p>
            </div>
          </div>

          <div className="image-wrapper custom-box">
            <p>
              Feel free to explore <br /> more of our work <br /> by visiting
              the link below.
            </p>
            <div className="button-container">
              <button className="rectangle-button">VIEW ALL WORKS</button>
              <button className="circle-button">
                <img src="oko.png" alt="Ikonica" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
