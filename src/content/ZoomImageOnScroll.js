import React, { useState, useEffect } from "react";

const images = [
  "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-grizzle.png",
  "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-360-1.jpg",
  "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-mob.jpg",
  "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-009.JPG",
  "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-197.JPG"
];

const texts = [
  "We are so excited to celebrate with you!",
  "Please RSVP 1 month before Oct 25, 2025"
];

export default function ScrollLockedHeader() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const totalSlides = images.length;
  const sectionHeight = totalSlides * window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Determine current slide index
      const slideProgress = scrollTop / window.innerHeight;
      const newIndex = Math.min(
        Math.floor(slideProgress),
        totalSlides - 1
      );
      setIndex(newIndex);

      // Zoom effect per slide
      const zoomFactor =
        1 + ((scrollTop % window.innerHeight) / window.innerHeight) * 0.5;
      setScale(zoomFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rsvp-container-zoom" style={{ height: sectionHeight + "px" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden"
        }}
      >
        {/* Images */}
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${scale})`,
              transition: "transform 0.2s ease-out",
              opacity: i === index ? 1 : 0,
              transitionProperty: "opacity, transform",
              transitionDuration: "0.5s",
              transitionTimingFunction: "ease-out"
            }}
          />
        ))}

        {/* Overlay for text contrast */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)"
          }}
        />

        {/* Text */}
        {texts.map((text, i) => (
          <h1
            key={i}
            style={{
              position: "absolute",
              fontFamily: "Antic Didone",
              fontWeight: "600",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "30px",
              textAlign: "center",
              minWidth:"300px",
              opacity: i === index ? 1 : 0,
              transition: "opacity 0.5s ease-out",
              zIndex: 3
            }}
          >
            {text}
            <a className='RSVP-link' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP</a>
          </h1>
        ))}

      </header>
    </div>
  );
}
