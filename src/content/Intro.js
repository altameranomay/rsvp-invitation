import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/images/prenup-edited-342.JPG',
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
        {/* <div className='text-container'>
          <h1 className='text-title'>You're <div className='separator'>Cordially</div> Invited</h1>
        </div> */}
        {images.map((src, index) => (
          // eslint-disable-next-line
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={process.env.PUBLIC_URL + src}
            alt={`Zoom Image ${index}`}
            className="zoom-image"
            style={{ transform: `scale(${scales[index]})` }}
          />
        ))}
        <div className='img-oblique-container'>
            <img alt='' src={process.env.PUBLIC_URL + '/images/prenup-edited-010.JPG'}/>
        </div>
        {/* <div className='intro-text'>
          <h2>God's Ordained</h2>
          <div className=''/>
          <h2>When the right time comes, 
                I will make this happen quickly.
                I am the Lord!”
                - Isaiah 60:22</h2>
        </div> */}
      </div>
  );
};
export default Intro;
