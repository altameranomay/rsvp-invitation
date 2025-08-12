import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const imgLogo = '/images/wedding-logo.png'

export default function Navigator() {

    const isMobile = useMediaQuery({ query: '(max-width: 801px)' });
    
    const [active, setActive] = useState(false);

    const handleToggle = () => {
      setActive((prev) => !prev);
    };

    const scrollToView = (id) => {
        setActive((prev) => !prev);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { id:'rsvp', name: "RSVP", href: "#RSVP" },
        { id:'our-story', name: "OUR STORY", href: "#our-story" },
        { id:'gallery', name: "GALLERY", href: "#gallery" },
        { id:'gift', name: "GIFT", href: "#gift" },
        { id:'rsvp', name: "DRESS CODE", href: "#dress-code" },
        { id:'rsvp', name: "ITINERARY", href: "#itinerary" },

    ];

    return (
        <nav 
            className={`navbar-container navbar navbar-expand-lg navbar-light bg-light ${active ? "active" : ""}`} id="navbar">
        {isMobile ? (
            <div className={`container ${active ? "active" : ""}`}>
                <a href="/" className="navbar-brand">
                    <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding "/>
                </a>
                <button type="button"
                     onClick={handleToggle}
                     className={`btn btn-light toggle-btn ${active ? "active" : ""}`}
                >
                    <img alt="hamburger" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/hamburger.png" className="hamburger"/>
                    <img alt="close" 
                    src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/closed.png" 
                    className="closed"/>
                </button>
                <ul  className="ms-auto navbar-nav active">
                    {navLinks.map((link) => (
                
                    <li >
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={() => scrollToView(link.id)}
                            >
                            {link.name}
                        </a>
                    </li>
                        
                ))}
                    </ul>
            </div>
        ) : (
        
        <div className="container">
            <ul className="ms-auto navbar-nav">
                <li >
                    <a href="#rsvp" className="nav-link" onClick={() => scrollToView('rsvp')}>RSVP</a>
                </li>
                <li>
                    <a href="#our-story"  className="nav-link" onClick={() => scrollToView('our-story')}>OUR STORY</a>
                </li>
                <li>
                    <a href="#gallery"  className="nav-link" onClick={() => scrollToView('gallery')}>GALLERY</a>
                </li>
                <li>
                    <a href="#rsvp" className="navbar-brand" onClick={() => scrollToView('rsvp')}>
                        <img src={process.env.PUBLIC_URL + imgLogo} alt="wedding "/>
                    </a>
                </li>
                <li>
                    <a href="#gift"  className="nav-link" onClick={() => scrollToView('gift')}>GIFT</a>
                </li>
                <li>
                    <a href="#dress-code"  className="nav-link" onClick={() => scrollToView('dress-code')}>DRESS CODE</a>
                </li>
                <li>
                    <a href="#itinerary"  className="nav-link" onClick={() => scrollToView('itinerary')}>ITINERARY</a>
                </li>
            </ul>
        </div>
        
        )}
        </nav>
        
    )
}