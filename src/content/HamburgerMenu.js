import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const imgLogo = '/images/Jefbel_logo.png';

const HamburgerMenu = () => {
  return (
    <Navbar id="navbar" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand  href="#" onclick="window.location.reload(true);" className='-mobile'>
          {/* <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding logo"/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Hamburger icon */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" onclick="window.location.reload(true);">RSVP</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">OUR STORY</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">ITINERARY</Nav.Link>
            
            
          
            <Navbar.Brand href="/">
              <img src={process.env.PUBLIC_URL + imgLogo} alt="jeffbell logo"/>
            </Navbar.Brand>

            
            <Nav.Link href="#" onclick="window.location.reload(true);">DRESS CODE</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">LOCATION</Nav.Link>
            <Nav.Link href="#" onclick="window.location.reload(true);">GALLERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HamburgerMenu;
