import Countdown from "./Countdown";

const CountdownTimer = () => {
  return (
    <div className="countdown-container">
      {/* <img  src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/car.png' alt='flower' className="flower"/>
      <span className="spn-save-date">
        <img  src={process.env.PUBLIC_URL + '/images/save-date.png'} alt='save date' className="save-date"/>
      </span> */}
      <h3 className="date">Let's start a countdown</h3>
      
      <Countdown targetDate="2025-10-25T23:59:59"/>
    </div>
  )
}
  
  export default CountdownTimer