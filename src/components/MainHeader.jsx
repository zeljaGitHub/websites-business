import React, { useEffect, useState } from "react";
import "./MainHeader.css";
import ImageCarousel from "./ImageCarousel";

const BusinessLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [translateY, setTranslateY] = useState(-100); // Početna vrednost podignuta

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollY(scrollPos);

      // Ako skrolujemo na dole -> spuštamo desnu sliku
      // Ako skrolujemo gore -> podižemo nazad
      setTranslateY(Math.min(-100 + scrollPos * 0.33, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="color-wrap">
        <div className="hero">
          <div className="content">
            <div className="big-letters">
              <h1>WE HELP</h1>
              <p className="grow">GROW</p>
              <div className="flex-row">
                <h2 className="your">YOUR</h2>
                <h1 className="business">BUSINESS</h1>
              </div>
            </div>
            <div className="arrow-p">
              <img src="arrow-circle.png" alt="arrow" className="img-arrow" />
              <p>
                We are a creative agency <br /> that specializes in branding,
                design, <br /> and development, helping businesses <br /> build
                strong identities and digital solutions <br /> that drive growth
                and success.
              </p>
            </div>
            <p>
              Who We Are{" "}
              <span>
                <img src="small-arrow.png" alt="arrow" />
              </span>
            </p>
          </div>
          <div className="image-container">
            <div className="split-circle">
              <div className="left-half">
                <img src="/leva-slika.png" alt="Leva slika" />
              </div>
              <div
                className="right-half"
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: "transform 0.2s ease-out",
                }}
              >
                <img src="/desna-slika.png" alt="Desna slika" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ImageCarousel /> */}
    </div>
  );
};

export default BusinessLanding;
