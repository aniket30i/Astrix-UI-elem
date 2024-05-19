import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import lg from "./assets/pictures/logo_1.png";
import Events from "./components/Events";
import Collections from "./components/Collections";
import LandingLoader from "./components/LandingLoader";
import styles from "./components/LandingLoader.module.css";

function App() {
  return (
    <>
      <LandingLoader />
      <Events />
      <Collections />
    </>
  );
}

export default App;
