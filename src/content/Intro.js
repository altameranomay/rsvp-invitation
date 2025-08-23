import React, { useEffect, useRef, useState } from 'react';

const images = [
  'https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-342.JPG',
];


const Intro = () => {
  
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
      <div className="intro image-container -right" id='our-story'>
        {images.map((src, index) => (
          // eslint-disable-next-line
          
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt='prenup'
            className="zoom-image"
            style={{ transform: `scale(${scales[index]})` }}
          />
        ))}
        <div className='img-oblique-container'>
            <img alt='prenup' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-010-1.jpg'/>
        </div>
      </div>
  );
};
export default Intro;
