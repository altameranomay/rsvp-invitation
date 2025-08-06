import TypeWriter from './TypeWriter';

const Header = () => {
  return (
    <div className="RSVP-container">
        <div className="rsvp-text-container" >
            <h2 data-aos="zoom-in"  className='you'>Bel </h2>
            <p  className='separator' data-aos="zoom-in" >& </p>
            <h2 data-aos="zoom-in" className='invited'>Jeffrey </h2>
            <TypeWriter words={['October 25 2025', "You're cordially Invited"]} typingSpeed={120} deletingSpeed={60} pauseTime={1000}/>
            <a href='/' className='rsvp-link'>RSVP by September 25 2025</a>
            <p className='desc'>Welcome to our wedding website! We've created this site as a convenient and interactive way to share all of the important details with you leading up to our wedding. We can't wait to celebrate this exciting new chapter of our lives together with you.</p>
        </div>
    </div>
  )
}

export default Header