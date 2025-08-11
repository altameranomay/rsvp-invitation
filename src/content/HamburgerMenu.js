import { Navbar, Nav, Container } from 'react-bootstrap';

const imgLogo = '/images/wedding-logo.png'

const HamburgerMenu = () => {

  return (
    <Navbar id="navbar" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand  href="#" onclick="window.location.reload(true);" className='-mobile'>
          <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Hamburger icon */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP</Nav.Link>
            <Nav.Link href="#" 
             onClick={() => document.getElementById("our-story").scrollIntoView({ behavior: "smooth" }) }>OUR STORY</Nav.Link>
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

export default HamburgerMenu;
