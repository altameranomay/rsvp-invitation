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

  const galleryMobile = [
    { id:'1', 
      alt: "wedding photo 1", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png" 
    },
    { id:'2', 
      alt: "wedding photo 2", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Jeffxbel-24.jpg" 
    },
    { id:'3', 
      alt: "wedding photo 3", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-201.jpg" 
    },
    { id:'4', 
      alt: "wedding photo 4", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-237.JPG" 
    },
    { id:'5', 
      alt: "wedding photo 5", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-018.JPG" 
    },
    { id:'6', 
      alt: "wedding photo 6", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-326.jpg" 
    },
  ];

  const galleryWeb = [
    { id:'1', 
      alt: "wedding photo 1", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-326.jpg" 
    },
    { id:'2', 
      alt: "wedding photo 2", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-083.jpg" 
    },
    { id:'3', 
      alt: "wedding photo 3", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-204.png" 
    },
    { id:'4', 
      alt: "wedding photo 4", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-201.jpg" 
    },
    { id:'5', 
      alt: "wedding photo 5", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png" 
    },
    { id:'6', 
      alt: "wedding photo 6", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-258.JPG" 
    },
    { id:'7', 
      alt: "wedding photo 7", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-259.JPG" 
    },
  ];

  return (
    <div className="slider-container" id="gallery">
      {isMobile ? (
         <Slider {...settingsMob}>
          {galleryMobile.map((imgs) => (
            <div className="img-slider-cont" id={imgs.id}>
              <img  alt={imgs.alt} src={imgs.src}/>
            </div>
          ))}
       </Slider>
      ) : (
          <Slider {...settings}>
            {galleryWeb.map((imgs) => (
              <div className="img-slider-cont" id={imgs.id}>
                <img  alt={imgs.alt} src={imgs.src}/>
              </div>
            ))} 
          </Slider>
        
      )}
    </div>
  );
}

export default Rtl;
