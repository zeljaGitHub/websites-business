import React from "react";

const NavbarLinks = () => {
  const links = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
