import React from "react";
import Slider from "react-slick";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container" id="gallery">
      <Slider {...settings}>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-381.png'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/Jeffxbel-24.jpg'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-010.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-014.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-018.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-031.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-076.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-083.JPG'}/>
        </div>
        <div className="img-slider-cont">
          <img alt='gallery' src={process.env.PUBLIC_URL + '/images/prenup-edited-204.png'}/>
        </div>
      </Slider>
    </div>
  );
}

export default Gallery;
