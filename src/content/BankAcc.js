import React, { useState, useRef } from "react";

export default function BankAcc() {
  const [value, setValue] = useState("Bank: PNB, Account Name: Maybelyn Picardal, Account #: 131310160347");
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
            <p>
              <img alt="Bank" 
              src="https://raw.githubusercontent.com/tabiblia/images/refs/heads/main/pnb.png"
               className="pnb"/>
            </p>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ padding: "6px", flex: 1 }}
            />
            <button class="btn btn-light btn-copy-number"  onClick={handleCopyBank}>
              {copied ? "Copied!" : "Copy PNB"}
            </button>
          </div>
    )
}
