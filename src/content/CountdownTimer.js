import React from "react";
import Countdown from "./Countdown";

const CountdownTimer = () => {
  return (
    <div className="countdown-container">
      <img  src={process.env.PUBLIC_URL + '/images/flower.png'} alt='flower' className="flower"/>
      <span className="spn-save-date">
        <img  data-aos="zoom-in-up" src={process.env.PUBLIC_URL + '/images/save-date.png'} alt='save date' className="save-date"/>
      </span>
      <h3  data-aos="zoom-in-up" className="date">October 25 2025</h3>
      
      <Countdown targetDate="2025-10-25T23:59:59"/>
    </div>
  )
}
  
  export default CountdownTimer