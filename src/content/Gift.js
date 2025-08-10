const Gift = () => {

  function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  return (
        <div className="gift-container">
          <img className="gift-img" alt='send gift image' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-076.JPG'/>
          <div className="text-gift-container">
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