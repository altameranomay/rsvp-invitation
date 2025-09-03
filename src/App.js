// import AOS from 'aos';
// import Slider from "react-slick";
import { useState } from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import Calendar from 'react-calendar';

import Carousel from './content/Carousel';
import Rsvp from './content/Rsvp';
import Intro from './content/Intro';
import StillImage from './content/StillImage';
import OurStory from './content/OurStory';
import CountdownTimer from './content/CountdownTimer';
import Entourage from './content/Entourage';
import Itinerary from './content/Itinerary';
import Gallery from './content/Gallery';
import Gallery1 from './content/Gallery1';
import Gift from './content/Gift';
import Mpplayer from './content/Mpplayer';
import Footer from './content/Footer';

function App() {
  // AOS.init();
  const [value, onChange] = useState(new Date(2025, 9, 25));
  return (
    <div className="page-wrapper">
      <Router>
        <Carousel/>
        <Rsvp/>
        <Intro/>
        <OurStory/>
        <StillImage/>
        <div
          className='wedding-calendar'
        >
          <Calendar
            onChange={onChange} // Callback for when a date is selected
            value={value} // Current selected date(s)
          />
        </div>
        <CountdownTimer/>
        <Entourage/>
        <Itinerary/>
        <Gallery/>
        <Gallery1/>
        <Gift/>
        <Mpplayer/>
        <Footer/>
        <Routes>
          <Route path="/" exact />
          <Route path="/product/productId" exact />
          <Route path="/404">404 not found</Route>
        </Routes>
      </Router>
      {/* <div className='spacer'/> */}
    </div>
  );
}

export default App;
