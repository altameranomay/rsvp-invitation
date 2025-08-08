import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-time">
      <span className="days" 
      data-aos="fade-up"
      data-aos-duration="1000">{timeLeft.days} <p>days</p> </span> 
      <span className="hrs"
      data-aos="fade-up"
      data-aos-duration="1000">{timeLeft.hours} <p>hours</p> </span> 
      <span className="min" 
      data-aos="fade-up"
      data-aos-duration="1000">{timeLeft.minutes} <p>minutes</p> </span> 
      <span className="sec"
      data-aos="fade-up"
      data-aos-duration="1000">{timeLeft.seconds} <p>seconds</p> </span>
    </div>
  );
};

export default Countdown;
