import { useMediaQuery } from 'react-responsive';

const Rsvp = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 801px)' });
  return (
    <div className="rsvp-container">
      {isMobile ? (
      <>
        {/* <div className='fixed-img'/>
        <div className='fixed-img two'/> */}
        <p className='text'>
          We are so excited to celebrate with you! <br/>
          Please RSVP  by September 25 2025
        </p>
        <h1 className="title mob">
          RS<br/>VP
        </h1>
        <a className='RSVP-link' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP here</a>
      </>
      ) : (
      <>
        {/* <div className='fixed-img'/> */}
        <p className='text'>
          We are so excited to celebrate with you! <br/>
          Please RSVP  by September 25 2025
        </p>
        <h1 className="title">
          RSVP
        </h1>
        <a className='RSVP-link ' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScXoy9jtMeEskgjE1Z0YwnIr7dTbKXQ25O4cFleKiptkhg1Yw/viewform?usp=header'>RSVP here</a>
      </>
      )}
    </div>
  )
}
  
  export default Rsvp