import AOS from 'aos';
import Slider from "react-slick";
import './App.css';

function App() {
  AOS.init();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-img-container" >
          <div className='overlay'></div>
          <div className="img main-img" data-aos="zoom-in"></div>
        </div>
        <div className="header-con" >
            <h2 data-aos="zoom-in" data-aos-duration="2000" className='you'>YOU'RE </h2>
            <h1 data-aos="zoom-in" data-aos-duration="1000">cordially </h1>
            <h2 data-aos="zoom-in" data-aos-duration="2000" className='invited'>INVITED </h2>
            {/* <p data-aos="zoom-in" data-aos-duration="2000">Lorem ipsum dolor sit amet</p> */}
            {/* <a className='lnk-rsvp' href="/" data-aos="fade-up"data-aos-anchor-placement="bottom-bottom">RSVP</a> */}
        </div>
      </header>
      <div className="contain1">
        <span className='text-cont'>
          <p data-aos="zoom-in" data-aos-anchor-placement="top-left" >JOYFULLY INVITE YOU TO CELEBRATE OUR</p>
          <div className='line'/>
          <h2 data-aos="zoom-in" data-aos-anchor-placement="top-left">Wedding</h2>
          <p data-aos="zoom-in" data-aos-anchor-placement="top-left" className='date'> <span>10</span> <span className='disc'/> <span>25</span> <span className='disc'/> <span>25</span> </p>
          <p data-aos="zoom-in" data-aos-anchor-placement="top-left" >Ceremony to commence<br/>at 3:00PM  </p>
          <img data-aos="zoom-in" src='images/cathedral-church.png' alt='cathedral' className='cathedral'/>
          <p data-aos="zoom-in" className='wed-place'>Team Cathedral & Event Center</p>
        </span>
       
        <div className='img-slider'>
          <Slider {...settings}>
            <div>
              
              <img src="https://i.pinimg.com/736x/e6/32/6f/e6326fcc42e6d011746ffcc5c35087fe.jpg" alt='img'></img>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/d1/0f/28/d10f28b7bba60e0ee5bf06fea92e2148.jpg" alt='img'></img>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/c1/0c/5e/c10c5e20baa3b2d4d08b3e71eaebc908.jpg" alt='img'></img>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/f4/6f/30/f46f30a03bab5be121b1287628407d8d.jpg" alt='img'></img>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/ba/61/da/ba61da3c6d416adf26bdb92fbda906e7.jpg" alt='img'></img>
            </div>
            <div>
              <img src="https://i.pinimg.com/736x/b4/8f/fc/b48ffc3d3c511740e0335914355b5c42.jpg" alt='img'></img>
            </div>
          </Slider>
        </div>

        <div className='wedding-details'>
          <h2 data-aos="zoom-in" >Wedding</h2>
          <h2 data-aos="zoom-in" className='normal-f'>PROGRAM</h2>
          
          <div className='wedding-program'>
            <ul className='program-list'>
              <div className='line'/>
              <li>
                <span>
                  <p data-aos="zoom-in">3:00 PM</p>
                  <img data-aos="zoom-in" src='images/wedding-ring.png' alt='cathedral' height='60px'/>
                </span>
                <p className='desc' data-aos="zoom-in">Duis aute irure dolor in reprehenderit</p>
              </li>
              <li>
                <span>
                  <p data-aos="zoom-in">4:30 PM</p>
                  <img data-aos="zoom-in" src='images/camera.png' alt='cathedral' height='45px'/>
                </span>
                <p className='desc' data-aos="zoom-in">Duis aute irure dolor in reprehenderit</p>
              </li>
              <li>
                <span>
                  <p data-aos="zoom-in">5:30 PM</p>
                  <img data-aos="zoom-in" src='images/wedding-cake.png' alt='cathedral' height='50px'/>
                </span>
                <p className='desc' data-aos="zoom-in">Duis aute irure dolor in reprehenderit</p>
              </li>
              <li>
                <span>
                  <p data-aos="zoom-in">8:30 PM</p>
                  <img data-aos="zoom-in" src='images/wedding-music.png' alt='cathedral' height='50px'/>
                </span>
                <p className='desc' data-aos="zoom-in">Duis aute irure dolor in reprehenderit</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='the-details'>
            <h2 data-aos="zoom-in" >The</h2>
            <h2 data-aos="zoom-in" className='normal-f'>DETAILS</h2>
            <p data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p data-aos="zoom-in" className='two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <b className='gold'>incididunt ut labore et dolore magna aliqua.</b> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br/><b className='gold'>Excepteur sint occaecat cupidatat non proident </b>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p data-aos="zoom-in"><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className='contain4'>
        <h1 className='rsvp'>RS<br/>VP</h1>
        <p className='rsvp-date'> By July 00</p>
        <a href='/' className='lnk-rsvp'>R S V P</a>
      </div>
      <div className='contain3'>
        {/* <h2 data-aos="zoom-in"></h2> */}
        <p data-aos="zoom-in">Lorem ipsum dolor sit amet.</p>
        <img data-aos="zoom-in" alt='QR Code' className='img-qr-code' src='images/waze-qr-code.png'/>
        <iframe  data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.990020815762!2d121.64287929999999!3d13.959199600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2b33889260885%3A0xeaae47d33a2098c8!2sTEAM%20CATHEDRAL%20AND%20EVENT%20CENTER!5e0!3m2!1sen!2sph!4v1751076620857!5m2!1sen!2sph" allowfullscreen="" title='title' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default App;
