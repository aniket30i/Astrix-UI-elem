import React from "react";
import "./App.css";
import lg from "./assets/pictures/logo_1.png";
import Events from "./components/Events";
import Collections from "./components/Collections";

function App() {
  return (
    <div className="back-ground">
      <div className="back-ground-tp-layer">
        <img className="lg_img" src={lg} alt="astrix_logo"></img>
        <h1 className="brand-nm">Astrix.</h1>
      </div>

      <div className="mid-branding">
        <div className="back-ground-mid-top">
          <h1>ASTR</h1>
          <h1>IX</h1>
        </div>

        <div className="back-ground-mid-low">
          <h1>EVE</h1>
          <h1>NTS</h1>
        </div>
      </div>

      <Events />
      <Collections />
    </div>
  );
}

export default App;
