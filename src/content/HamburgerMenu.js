import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HamburgerMenu = () => {
  return (
    <Navbar id="navbar" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/" className='-mobile'>
          <img src={process.env.PUBLIC_URL + '/images/Jefbel_logo.png'} alt="jeffbell logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Hamburger icon */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" onclick="window.location.reload(true);">RSVP</Nav.Link>
            <Nav.Link href="/">OUR STORY</Nav.Link>
            
            <Nav.Link href="/">LOCATION</Nav.Link>
            
          
            <Navbar.Brand href="/">
              <img src={process.env.PUBLIC_URL + '/images/Jefbel_logo.png'} alt="jeffbell logo"/>
            </Navbar.Brand>

            <Nav.Link href="/">ITINERARY</Nav.Link>
            <Nav.Link href="/">DRESS CODE</Nav.Link>
            <Nav.Link href="/">GALLERY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HamburgerMenu;
