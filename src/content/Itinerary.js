const Itinerary = () => {

  const weddingList = [
    {
      id:"1", 
      alt:"wedding ceremony", 
      time:"03:00pm", 
      src:"https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/marriage.png"
    },
    {
      id:"2", 
      alt:"Reception", 
      time:"06:00pm", 
      src:"https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/cake.png"
    },
    {
      id:"3", 
      alt:"first dance", 
      time:"07:00pm", 
      src:"https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/first-dance.png"
    },
    {
      id:"4", 
      alt:"wedding party", 
      time:"08:00pm", 
      src:"https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/wedding-party.png"
    },
    {
      id:"5", 
      alt:"end of wedding", 
      time:"10:00pm", 
      src:"https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/just-married.png"
    }
    ]
  return (
        <div className="itinerary-container">
          <h1 className="title">Program</h1>
          <p className="text"></p>
          <div className="itinerary-list">
            {weddingList.map((wlists) => (
                <div className="itinerary-content">
                <img alt={wlists.alt} src={wlists.src}/>
                <div className="divider"/>
                <p className="text">
                  <time>{wlists.time}</time>
                  <span>{wlists.alt}</span>
                </p>
              </div>
            ))}

          </div>
        </div>
    )
}

export default Itinerary