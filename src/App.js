import AOS from 'aos';
// import Slider from "react-slick";
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"

import ZoomImageOnScroll from './content/ZoomImageOnScroll';
import Navigator from './content/Navigator';
import Intro from './content/Intro';
import OurStory from './content/OurStory';
import CountdownTimer from './content/CountdownTimer';
import Entourage from './content/Entourage';
import DressCode from './content/DressCode';
import Gallery from './content/Gallery';
import Gallery1 from './content/Gallery1';
import Gift from './content/Gift';
import Mpplayer from './content/Mpplayer';
import Footer from './content/Footer';

function App() {
  AOS.init();
  return (
    <div className="page-wrapper">
      <Router>
        <ZoomImageOnScroll/>
        <Navigator/>
        <Intro/>
        <OurStory/>
        <CountdownTimer/>
        <Entourage/>
        <DressCode/>
        <Gift/>
        <Gallery/>
        <Gallery1/>
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
