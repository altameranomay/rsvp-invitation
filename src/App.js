import AOS from 'aos';
// import Slider from "react-slick";
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"

import ZoomImageOnScroll from './content/ZoomImageOnScroll';
import HamburgerMenu from './content/HamburgerMenu';
import Navigator from './content/Navigator';
import Intro from './content/Intro';
import OurStory from './content/OurStory';
import CountdownTimer from './content/CountdownTimer';
import Gallery from './content/Gallery';
import Gallery1 from './content/Gallery1';
import Gift from './content/Gift';
// import ZoomName from './content/ZoomName';
import Mpplayer from './content/Mpplayer';
import Location from './content/Location';

function App() {
  AOS.init();
  return (
    <div className="page-wrapper">
      <Router>
        <ZoomImageOnScroll/>
        {/* <HamburgerMenu/> */}
        <Navigator/>
        <Intro/>
        <OurStory/>
        <CountdownTimer/>
        <Gallery/>
        <Gallery1/>
        <Gift/>
        {/* <ZoomName/> */}
        <Mpplayer/>
        <Location/>
        <Routes>
          <Route path="/" exact />
          <Route path="/product/productId" exact />
          <Route path="/404">404 not found</Route>
        </Routes>
      </Router>
      <div className='spacer'/>
    </div>
  );
}

export default App;
