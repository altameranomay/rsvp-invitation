import AOS from 'aos';
// import Slider from "react-slick";
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import ZoomImageOnScroll from './content/ZoomImageOnScroll';
import Header from './content/Header';

function App() {
  AOS.init();
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };
  return (
    <div className="page-wrapper">
      <Router>
        <ZoomImageOnScroll/>
        <Header/>
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
