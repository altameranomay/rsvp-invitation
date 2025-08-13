import React from "react";
import styles from "./BelJeffWedding.module.css";

/**
 * Simple presentational component.
 * Props left minimal — you can extend for size, font, etc.
 */
const Cursive: React.FC = () => {
  return (
    <>
      {/* Quick font-load for demo. For production put this in index.html <head>. */}
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <div className={{
        background: "#0d1b21",       /* user-specified background */
        minHeight: "100vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"2rem",
        boxSizing:"border-box"
      }}>
        <h1 className={styles.cursiveText}>Bel &amp; Jeff Wedding</h1>
      </div>
    </>
  );
};

export default Cursive;
