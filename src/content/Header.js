import { useEffect, useRef, useState } from 'react';
import { isMobile } from "react-device-detect";

const images = isMobile ? ['https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-mob.jpg'] : ['https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-grizzle.png'];

const Header = () => {

  const imageRefs = useRef([]);
  const [scales, setScales] = useState(images.map(() => 1));

  useEffect(() => {
    const handleScroll = () => {
      const newScales = imageRefs.current.map((img) => {
        if (!img) return 1;

        const rect = img.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const imageCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - imageCenter);
        const maxDistance = window.innerHeight / 2;

        const ratio = Math.max(0, 1 - distance / maxDistance); // 0 to 1
        const scale = 1 + ratio * 0.2; // Zoom up to 1.2

        return scale;
      });

      setScales(newScales);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="image-container -right head">
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt={`Zoom Image ${index}`}
            className="zoom-image"
            style={{ transform: `scale(${scales[index]})` }}
          />
        ))}
        <div className='header-text-container'>
          <h5>We are so excited to celebrate with you! <br/>
          Please RSVP 1 month before October 25, 2025</h5>
          <a className='RSVP-link' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP</a>
        </div>
      </div>
  );
};
export default Header;