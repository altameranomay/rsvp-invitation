const Location = () => {
  return (
        <div className="location-container">
            <div className="reception-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.951884125659!2d121.60063050000001!3d13.9614697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4c9464de41fb%3A0x2ccf87c77bde02c!2sQuezon%20Premier%20Hotel%20Lucena!5e0!3m2!1sen!2sph!4v1754665820891!5m2!1sen!2sph" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 {/* <div className="reception-text">
                    <h1>Wedding Location</h1>
                    <p>TEAM CATHEDRAL AND EVENT CENTER</p>
                    <p>Scan the QR code to easily access direction from your location</p>
                    <img src={process.env.PUBLIC_URL + '/images/wedding-qr.png'} alt='reception' className="qr-code"/>
                </div> */}
            </div>
            
        </div>
    )
}

export default Location