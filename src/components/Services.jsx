import React, { useState } from "react";
import "./Services.css";

const sections = [
  {
    id: 1,
    title: (
      <>
        Social Media <br /> Strategy
      </>
    ),
    text: "Ovo je uvodni tekst za sekciju 1...",
    fullText: "Ovo je puni tekst za sekciju 1 koji se vidi kada pritisnete +.",
    image: "01.png",
  },
  {
    id: 2,
    title: (
      <>
        Performance <br /> Marketing
      </>
    ),
    text: "Ovo je uvodni tekst za sekciju 2...",
    fullText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eaque obcaecati exercitationem? Veniam dolore officia unde. Maiores dolores doloribus amet quasi neque non nihil voluptate, ex iste, minus quo laudantium. Obcaecati, nemo quo asperiores harum molestias ad, odio voluptatum nostrum similique quasi, rem debitis unde libero. Deserunt illum libero voluptatibus magni eos temporibus, quas unde non harum tenetur nobis, id fugit corrupti commodi. Nostrum possimus similique asperiores, corporis hic inventore assumenda, adipisci ratione molestiae, odio animi quas veniam facere nobis.",
    image: "02.png",
  },
  {
    id: 3,
    title: (
      <>
        Influencer <br /> Marketing
      </>
    ),
    text: "Ovo je uvodni tekst za sekciju 3...",
    fullText: "Ovo je puni tekst za sekciju 3 koji se vidi kada pritisnete +.",
    image: "03.png",
  },
  {
    id: 4,
    title: (
      <>
        Contact <br /> Creation
      </>
    ),
    text: "Ovo je uvodni tekst za sekciju 4...",
    fullText: "Ovo je puni tekst za sekciju 4 koji se vidi kada pritisnete +.",
    image: "04.png",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id); // Promeni stanje na osnovu toga da li je sekcija proširena
  };

  return (
    <div className="container">
      <div className="border-wrapper-services">
        <div className="section-container">
          <h2>
            ACHIEVING GROWTH IN SALES <br /> THROUGH EXCEPTIONAL{" "}
            <span className="span-green">SERVICES</span> IS <br /> OUR PRIMARY
            CHALLENGE AND FOCUS.
          </h2>
          <div className="divider"></div>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section-wrapper ${
                expanded === section.id ? "expanded" : ""
              }`} // Dodajemo "expanded" klasu kada je sekcija proširena
            >
              <div
                className={`section-item ${
                  expanded === section.id ? "expanded" : ""
                }`} // Isto važi i za item
              >
                <span className="number">0{section.id}</span>
                <img
                  src={section.image}
                  alt={section.title}
                  className="section-image"
                />
                <h4>{section.title}</h4>
                <p
                  className={
                    expanded !== section.id
                      ? section.id === 3
                        ? "uvodni-tekst-3"
                        : section.id === 4
                        ? "uvodni-tekst-4"
                        : ""
                      : ""
                  }
                >
                  {expanded === section.id ? section.fullText : section.text}
                </p>

                <button
                  className="toggle-btn"
                  onClick={() => toggleExpand(section.id)} // Pozivanje funkcije kad se pritisne dugme
                >
                  <img
                    src={expanded === section.id ? "minus.png" : "plus.png"}
                    alt="Toggle"
                  />
                </button>
              </div>
              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
