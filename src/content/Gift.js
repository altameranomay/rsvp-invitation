const Gift = () => {

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

  return (
        <div className="gift-container" id="gift">
          <img 
            data-aos="fade-up"
            className="gift-img" alt='send gift image' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-076.JPG'/>
          <div className="text-gift-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Send Your Gift</h1>
            <p>Give your special gift to the bride and groom, either in the form of a gift or cashless through the button below</p>
            <p>Send can donate via Gcash</p>
            <input type="text" value="09454153802" id="myInput"></input>
            <button type="button" class="btn btn-light btn-copy-number" onclick="myFunction()">Copy number to clipboard</button>
          </div>
        </div>
    )
}

export default Gift