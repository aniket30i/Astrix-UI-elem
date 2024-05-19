import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import lg from "./assets/pictures/logo_1.png";
import Events from "./components/Events";
import Collections from "./components/Collections";
import LandingLoader from "./components/LandingLoader";

function App() {
  return (
    <div className="app">
      <LandingLoader />
      <Events />
      <Collections />
    </div>
  );
}

export default App;
