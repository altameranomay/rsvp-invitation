import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";

export default function Gallery() {

  const isMobile = useMediaQuery({ query: '(max-width: 801px)' });

  const settingsMob = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

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

  const galleryMobile = [
    { id:'1', 
      alt: "wedding photo 1", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-083.jpg" 
    },
    { id:'2', 
      alt: "wedding photo 2", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-031.JPG" 
    },
    { id:'3', 
      alt: "wedding photo 3", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-014.JPG" 
    },
    { id:'4', 
      alt: "wedding photo 4", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-028.JPG" 
    },
    { id:'5', 
      alt: "wedding photo 5", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-020.JPG" 
    },
  ];

  const galleryWeb = [
    { id:'1', 
      alt: "wedding photo 1", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png" 
    },
    { id:'2', 
      alt: "wedding photo 2", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-309.JPG" 
    },
    { id:'3', 
      alt: "wedding photo 3", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-039.JPG" 
    },
    { id:'4', 
      alt: "wedding photo 4", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Jeffxbel-24.jpg" 
    },
    { id:'5', 
      alt: "wedding photo 5", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-018.JPG" 
    },
    { id:'6', 
      alt: "wedding photo 6", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-031.JPG" 
    },
    { id:'7', 
      alt: "wedding photo 7", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-020.JPG" 
    },
    { id:'8', 
      alt: "wedding photo 8", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-083.JPG" 
    },
    { id:'9', 
      alt: "wedding photo 9", 
      src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-028.JPG" 
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

