const DressCode = () => {
  return (
        <div className="dresscode-container">
          <div className="flower top-right"/>
          <div
            className="relative dresscode-background"
            style={{
              backgroundImage: "url('https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/entourage-background-1.jpg')",
              backgroundAttachment: "fixed",
              width: "100%",
              backgroundSize: "100% auto",
              backgroundRepeat:"repeat" // keeps background static
            }}
          >
             <div className='txt-dresscode-title' />
             <div className='girl-dresscode top-left' />
             
              <div className="dress-codes">
                <div className="one-list">
                  <h1 className="code-title">
                    ATTIRE
                  </h1>
                  <p className="code-name">MOTIF: Deep Forest Green</p>
                </div>

                <div className="one-list">
                  <h1 className="code-title">
                    DRESS CODE
                  </h1>
                  <p className="code-name">Principal Sponsors</p>
                </div>

                <div className="one-list">
                  <h1 className="code-title">
                    GENTLEMEN
                  </h1>
                  <p className="code-name">Barong Tagalog</p>
                </div>

                <div className="one-list">
                  <h1 className="code-title">
                    LADIES
                  </h1>
                  <p className="code-name">Long Cream/Beige Dress</p>
                </div>

                <div className="one-list">
                  <h1 className="code-title">
                    PALETTE
                  </h1>
                  <p className="code-name">For guests choose any of the color below</p>
                  <div className="palette">
                    <span className="cream"/>
                    <span className="bitter"/>
                    <span className="forest-green"/>
                    <span className="deep-forest-green"/>
                  </div>
                </div>
              </div>
            <div className="flower-2 bottom-right"/>
            <div className='boy-dresscode bottom-left' />
          </div>
        </div>
    )
}

export default DressCode