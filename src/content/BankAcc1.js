import React, { useState, useRef } from "react";

export default function BankAcc1() {
  const [value, setValue] = useState("Bank: BDO, Account Name: Jeffrey Louie M. Montevirgen, Account #: 001820981159");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopyBank = async () => {
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
          <div className="bank">
            <img alt="Bank" 
              src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/bdo.png"
               className="pnb"/>
            <p>
              Bank: BDO, <br/>
              Name: Jeffrey Louie M. Montevirgen,  <br/>
              Account #: 001820981159
            </p>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ padding: "6px", flex: 1 }}
            />
            <button class="btn btn-light btn-copy-number"  onClick={handleCopyBank}>
              {copied ? "Copy done" : "Copy BDO"}
            </button>
          </div>
    )
}
