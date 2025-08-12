import React, { useRef, useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const imgLogo = '/images/wedding-logo.png'

export default function HamburgerMenu(){
  const mainRef = useRef(null);
  const anotherRef = useRef(null);
  const [active, setActive] = useState(false);

  // Toggle class on main container
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  // Handle link click: remove classes & smooth scroll
  const handleLinkClick = (targetId) => {
    setActive(false); // remove active from main container
    anotherRef.current?.classList.remove("show");
    mainRef.current?.classList.remove("show"); // remove from another container

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar id="navbar" expand="lg" bg="light" variant="light" ref={mainRef}
    className={`${active ? "show" : ""}`}>
      <Container >
        <Navbar.Brand  href="#" onclick="window.location.reload(true);" className='-mobile'>
          <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} /> {/* Hamburger icon */}
        <Navbar.Collapse id="basic-navbar-nav" ref={anotherRef}>
          <Nav className="ms-auto">
            <Nav.Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP</Nav.Link>
            <Nav.Link href="#" onClick={() => handleLinkClick("our-story")}>OUR STORY</Nav.Link>
            <Nav.Link href="#" onClick={() => document.getElementById("gallery").scrollIntoView({ behavior: "smooth" }) }>GALLERY</Nav.Link>

            <Navbar.Brand  href="#" onclick="window.location.reload(true);">
              <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding "/>
            </Navbar.Brand>

            <Nav.Link href="#" 
              onClick={() => document.getElementById("gift").scrollIntoView({ behavior: "smooth" }) }>GIFT</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">ITINERARY</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">DRESS CODE</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default HamburgerMenu;
