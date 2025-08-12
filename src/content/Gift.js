import React, { useState, useRef } from "react";
import BankAcc from "./BankAcc";

export default function Gift() {
  const [value, setValue] = useState("Name: Jeffrey Louise Montevirgen, Gcash #: 09454153802");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = async () => {
    try {
      // First try modern API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback: create hidden textarea and execCommand
        const textarea = document.createElement("textarea");
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999); // for iOS Safari
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  return (
        <div className="gift-container" id="gift">
          <img 
            data-aos="fade-up"
            className="gift-img" alt='send gift image' src='https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/prenup-edited-094.JPG'/>
          <div className="text-gift-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Send Your Gift</h1>
            <p>Give your special gift to the bride and groom, either in the form of a gift or cashless through the button below</p>
            <p>You can donate via Gcash or PNB</p>
            <div className="bank-cover">
              <div className="online-bank">
                <p>
                  <img alt="gcash" 
                    src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/gcash.png"
                    className="gcash"/>
                </p>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ padding: "6px", flex: 1 }}
                />
                <button class="btn btn-light btn-copy-number"  onClick={handleCopy}>
                  {copied ? "Copied!" : "Copy Gcash"}
                </button>
              </div>
              <BankAcc/>
            </div>
          </div>

          
        </div>
    )
}

// export default Gift