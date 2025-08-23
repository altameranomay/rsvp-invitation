const imgLogo = '/images/wedding-logo.png'

const Entourage = () => {
  return (
      <div className="entourage-container" id="entourage">
        
        <h1 className="title"> Entourage</h1>
        <p className="text"> Click download for the copy of the list of the wedding invities,
        what you are seeing are the soft copy of the Invitation list itself.</p>
        <a className="btn-download-entourage" href="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Bel&Jeff-Wedding-Entourage.pdf" download>
          Download Entourage
        </a>
        <div className="invitation-container">
          <div className="logo">
            <img alt='wedding logo' className="wedd-logo" src={process.env.PUBLIC_URL + imgLogo}/>
          </div>
          
          <img alt='bridal entourage' src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/bridal-entourage.jpg"/>
          <img alt='secondary sponsor' src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/secondary-sponsor.jpg"/>
        
          <div className="white-flower"/>
        </div>
        <div className="invitation-container">
           <div className="white-flower two"/>
          <img alt='attire' src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/attire.jpeg" className="attire"/>
          <div className="palette">
            <span className="cream"/>
            <span className="bitter"/>
            <span className="forest-green"/>
            <span className="deep-forest-green"/>
          </div>
        </div>
        <p className="text"> Love is patient, love is kind. It does not envy, it does not boast, it is not proud.  
          It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. -1 Corinthians 13:4-7
        </p>
      </div>
    )
}

export default Entourage