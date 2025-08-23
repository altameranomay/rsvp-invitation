const StillImage = () => {

  const images = [
    { id:'1', src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-259.JPG",  alt:"left still wedding photo" },
    { id:'2', src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-grizzle.jpg", alt:"center still wedding photo"},
    { id:'3', src: "https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-258.JPG", alt:"right still wedding photo"},

];
  return (
        <div className="still-img-container">
          {images.map((imgs) => (
            <img className="still-img" id={imgs.id} 
            src={imgs.src}  alt={imgs.alt}/>
          ))}
        </div>
    )
}

export default StillImage