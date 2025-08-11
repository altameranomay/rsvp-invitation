import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";

function Rtl() {
  const isMobile = useMediaQuery({ query: '(max-width: 801px)' });

  const settingsMob = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: true
  };
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    rtl: true
  };
  return (
    <div className="slider-container" id="gallery">
      {isMobile ? (
         <Slider {...settingsMob}>
         <div className="img-slider-cont">
           <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-010.JPG'/>
         </div>
         <div className="img-slider-cont">
          <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png'/>
          </div>
         <div className="img-slider-cont">
           <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Jeffxbel-24.jpg'/>
         </div>
         <div className="img-slider-cont">
           <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-196.JPG'/>
         </div>
         
       </Slider>
      ) : (
          <Slider {...settings}>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Jeffxbel-24.jpg'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-010.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-014.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-018.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-031.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-076.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-083.JPG'/>
            </div>
            <div className="img-slider-cont">
              <img alt='gallery' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-204.png'/>
            </div>
          </Slider>
        
      )}
    </div>
  );
}

export default Rtl;
