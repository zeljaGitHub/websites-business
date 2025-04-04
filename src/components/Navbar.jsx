import React, { useEffect, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import "./Navbar.css";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 1000) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${fixed ? "nav-fixed" : "nav-not-fixed"}`}>
        <div className="logo">LOGO</div>
        <NavbarLinks />
      </nav>
      {fixed && <div className="nav-placeholder"></div>}
    </>
  );
};

export default Navbar;
