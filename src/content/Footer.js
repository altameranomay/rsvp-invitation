import { useMediaQuery } from 'react-responsive';

const imgLogo = '/images/wedding-logo-1.png'

const Footer = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 801px)' });

  return (
      <div className="footer-container">
        {isMobile ? (
        <>
        <div className="footer-images">
          <img alt="footer mini 1" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-338.JPG"/>
          <img alt="footer mini 2" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-031.JPG"/>
          <img alt="footer mini 3" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-014.JPG"/>
          <img alt="footer mini 4" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-204.png"/>
          <img alt="footer mini 5" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-309.JPG"/>
          <img alt="footer mini 6" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png"/>
        </div>
        <img className='wedding-logo' src={process.env.PUBLIC_URL + imgLogo} alt="wedding "/>
        <hr/>
        <div className="top">
          <p className='txt-normal'> - Isaiah 60:22 - <br/> <br/>When the time is right, I the Lord, will make it happen quickly.</p>
          <ul>
            <li>
              <a href="#rsvp">RSVP</a>
            </li>
            <li>
              <a  href="#our-story">OUR STORY</a>
            </li>
            <li>
              <a  href="#entourage">ENTOURAGE</a>
            </li>
            <li>
              <a  href="#gift">GIFT</a>
            </li>
            <li>
              <a  href="#gallery">GALLERY</a>
            </li>
            <li>
              <a  href="#itinerary">ITINERARY</a>
            </li>
          </ul>
        </div>
        </>
        ) : (
        <div className="footer-images">
          <img alt="footer min 1" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-338.JPG"/>
          <img alt="footer  min 2" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-031.JPG"/>
          <img alt="footer  min 3" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-014.JPG"/>
          <img alt="footer  min 4" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-204.png"/>
          <img alt="footer  min 5" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-309.JPG"/>
          <img alt="footer  min 6" src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-381.png"/>
        </div>
        
        )}

        <div className="bottom">
          <p>© 2025 Bel & Jeff Wedding | Privacy Policy | Designed by Emotional Inspiration</p>
        </div>
      </div>
    )
}

export default Footer