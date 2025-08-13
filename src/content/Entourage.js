const Entourage = () => {
  return (
      <div className="entourage-container">
        <div className="flower top-left"/>
        <div
        className="relative entourage-background"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/entourage-background.png')",
          backgroundAttachment: "fixed",
          minHeight:"100vh",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat:"repeat" // keeps background static
        }}
      >
        <img className='txt-entourage-title' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/bridal-entourage.png' alt='bridal entourage'/>
        <a className="btn-download-entourage" href="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/Bel&Jeff-Wedding-Entourage.pdf" download>
          Download <br/>Entourage
        </a>
        <div className="guest-list-container">
          <div className="one-list">
            <h1 className="guest-title">
              Officiant
              {/* <img className="img-title" src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/parent.png' alt='Officiant'/> */}
            </h1>
            <p className="guest-name">Bishop Robert Isles</p>
          </div>
          <div className="two-list">
            <h1 className="guest-title">
              Parents
            </h1>
            <p className="guest-name">
              Mrs. Ruby Joy M. Montevirgen <br/> 
              Mr. Luisito C. Montevirgen <br/>
            </p>
            <p className="guest-name">
              Dra. Amelia C. Altamerano <br/>
              Mr. Edwin B. Picardal
            </p>
          </div>
          <div className="two-list">
            <h1 className="guest-title">
              Principal Sponsors
            </h1>
            <p className="guest-name">
              Dr. Edilberto & Dang Hermosa <br/>
              Bishop Ricardo Sio <br/>
              Bishop Tony Marioghae <br/>
              P/Col. Romulo Albacea <br/>
              Mr. Leo Trofeo Macariola <br/>
              Bishop Adonis Acuna <br/>
              Engr. Orly Pernites <br/>
              Ptr Ram Mercado <br/>
              Engr. Ernesto & Lea Padillo <br/>
              Mr. Arcadio Altamerano  <br/>
              Bishop Romeo P. Valle <br/>
              Ptr. Jessie S. Sucaldito  <br/>
            </p>
            <p className="guest-name">
              Mrs. Liza C Chiu <br/>
              Mrs. Isabel V. Hillerstam <br/> 
              Mrs. Jesusa P. Valdemar  <br/>
              Mrs. Eleonor A. Pendre  <br/>
              Ms. Marissa Picardal <br/>
              Rev. Shella D. Rogas  <br/>
              Ms. Susan Mejia <br/>
              Mrs. Bobbi Girard <br/>
              Ptra. Rose C. Pernites <br/>
              Mrs. Josephine T. Bonto <br/>
              Mrs. Maria Teresa A. Co <br/>
              Mrs. Cristina Pecha <br/>
              Mrs. Maria Elena I. Ramirez <br/>
              Ms. Arlene V. Bote <br/>
            </p>
          </div>
          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Best Man
                {/* <img className="img-title" src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/parent.png' alt='Officiant'/> */}
              </h1>
              <p className="guest-name">Mr. Christopher M. Montevirgen</p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Maid of Honor
              </h1>
              <p className="guest-name">Ms. Ma. Angelica A. Roquiño</p>
            </div>
          </div>

          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Grooms Men
              </h1>
              <p className="guest-name">
                Kurt Patrick Laja <br/>
                John Derick Miranda <br/>
                Jar-Ar L. Lasin <br/>
                Isaiah Chayil Flancia <br/>
              </p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Brides Maid
              </h1>
              <p className="guest-name">
                Patricia Ann Santos <br/>
                Alyssa Faye Garcia <br/>
                Nerri Jen Geray <br/>
                Trishna Sahie R. Santos <br/>
              </p>
            </div>
          </div>

          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Little Groom
              </h1>
              <p className="guest-name">Khal Denver A. Valencia</p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Little Bride
              </h1>
              <p className="guest-name">Marcelyn Santos</p>
            </div>
          </div>

          <div className="one-list">
            <h1 className="guest-title">
              Secondary Sponsors
            </h1>
          </div>

          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Candle
              </h1>
              <p className="guest-name">
                Engr. Dianne M. Montevirgen <br/>
                Engr. Jake D. Abang
                </p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Cord
              </h1>
              <p className="guest-name">
                Dra. Polina Y'vana N. Co <br/>
                Ptr. Raymond M. Montevirgen
                </p>
            </div>
          </div>

          <div className="one-list">
            <h1 className="guest-title">
              Viel
            </h1>
            <p className="guest-name">
              Ms. Clarisse Pendre <br/>
              Mr. John Joshua M. Lingon
              </p>
          </div>

          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Ring Bearer
              </h1>
              <p className="guest-name">
                Rakim Hadriel G. Sano
              </p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Bible
              </h1>
              <p className="guest-name">
                Markus Malakai C. Acesor
              </p>
            </div>
          </div>

          <div className="two-list-guest">
            <div className="one-list">
              <h1 className="guest-title">
                Coin Bearer
              </h1>
              <p className="guest-name">
                Alexander Bryann M. Gedaria
              </p>
            </div>
            <div className="one-list">
              <h1 className="guest-title">
                Banner Bearer
              </h1>
              <p className="guest-name">
                Johnriel Lucas M. Nañez
              </p>
            </div>
          </div>

          <div className="one-list">
            <h1 className="guest-title">
              Flower Girls
            </h1>
            <p className="guest-name">
              Raquena Haniah G. Sano <br/>
              Atarah Ashmin Asesor <br/>
              Faye Andrea G. Montevirgen <br/>
              Zhekainnah Nueva
            </p>
          </div>
        </div>
      </div>
      <div className="flower bottom-right"/>
    </div>
    )
}

export default Entourage