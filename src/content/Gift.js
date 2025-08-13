import React, { useState, useRef } from "react";
import BankAcc from "./BankAcc";
import BankAcc1 from "./BankAcc1";

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
          <div className="text-gift-container"
          >
            <h1>Send Your Gift</h1>
            <p>Give your special gift to the bride and groom, either in the form of a gift or cashless through the button below</p>
            <p>You can donate via Gcash, PNB or BDO</p>
            <div className="bank-cover">
              <div className="online-bank">
                <img alt="gcash" 
                    src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/gcash.png"
                    className="gcash"/>
                <p>
                  Name: Jeffrey Louie M. Montevirgen,<br/>
                  Gcash #: 09454153802
                </p>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ padding: "6px", flex: 1 }}
                />
                <button class="btn btn-light btn-copy-number"  onClick={handleCopy}>
                  {copied ? "Copy done" : "Copy Gcash"}
                </button>
              </div>
              <BankAcc/>
              <BankAcc1/>
            </div>
          </div>

          
        </div>
    )
}

// export default Gift