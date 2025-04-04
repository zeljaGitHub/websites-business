import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <h2 className="align-right">LOGO</h2>
            <p className="align-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Voluptatem alias deleniti adipisci placeat ratione soluta est,
              <br />
              porro, unde doloribus, provident eum molestiae quisquam qui aut{" "}
              <br />
              aliquam minima! Obcaecati nemo qui sapiente, modi itaque vitae vr{" "}
              <br />
              molestias architecto similique deleniti asperiores hic facilis{" "}
              <br />
              dolorum dolore nulla esse ducimus explicabo quos quo repellendus?
            </p>
          </div>
          <div className="footer-contact-middle"></div>
          <div className="footer-content-right">
            <div className="isti-red">
              <img src="emailpicture.png" alt="Email" />
              <p>jovanjocic987@gmail.com</p>
            </div>
            <div className="isti-red">
              <img
                src="locationpicture.png"
                alt="Location"
                className="location-img"
              />
              <p className="jeronimova">Jeronimova 19, Nis</p>
            </div>
            <div className="isti-red">
              <img src="phonepicture.png" alt="Phone" />
              <p>+381 65 37 999 79</p>
            </div>
            <div className="social">
              <img src="facebook.png" alt="Facebook" />
              <img src="msgn.png" alt="Messenger" />
              <img src="instagram.png" alt="Instagram" />
              <img src="in.png" alt="In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
