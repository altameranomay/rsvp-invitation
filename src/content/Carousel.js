import React, { useState } from "react";
import Slider from "react-slick"
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

export default function ImageFadeUpCarousel() {
  const isMobile = useMediaQuery({ query: '(max-width: 801px)' });

  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrent(next), // 👈 track current slide
  };
  const slides = [
    {
      id:'1', 
      alt:'wedding prenup', 
      img:'https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-grizzle.jpg',
      title: "Isaiah 60:22 Story",
      body: "... Our story is a testimony of God's greatness and faithfulness",
    },
    {
      id:'2', 
      alt:'wedding prenup', 
      img:'https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-360-2.jpg',
      title: "Isaiah 60:22 Story",
      body: "... He brought our paths together in His perfect timing and has been the center of our relationship.",
    },
    {
      id:'3', 
      alt:'wedding prenup', 
      img:'https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-mob-2.jpg',
      title: "Isaiah 60:22 Story",
      body: "... A God's ordained relationship into marriage",
    },
    {
      id:'4', 
      alt:'wedding prenup', 
      img:'https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-197-2.jpg',
      title: "Isaiah 60:22 Story",
      body: "... Trusting that the One who started this beautiful story will carry it on forever.",
    }
  ]
  return (
    <Slider {...settings} className="one-slider">
      {slides.map((s, i) => (
        <div key={i} className="relative">
          {/* Background image */}
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-[450px] object-cover rounded-2xl"
          />
          {isMobile ? (
          <div className="slider-text-container" id={`title-${current}`}>
            <motion.h2
            
              className="mob-h2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              key={`${current}-title`} // re-trigger animation on slide change
            >
              {s.title}
            </motion.h2>
            <motion.p
              className="mob-p"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              key={`${current}-body`} // re-trigger animation on slide change
            >
              {s.body}
            </motion.p>
          </div>
          ) : (
          <div className="slider-text-container" id={`title-${current}`}>
            <motion.h2
            
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              key={`${current}-title`} // re-trigger animation on slide change
            >
              {s.title}
            </motion.h2>
            <motion.p
              className="text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              key={`${current}-body`} // re-trigger animation on slide change
            >
              {s.body}
            </motion.p>
          </div>
          )}
        </div>
      ))}
    </Slider>
  );
}