import React from "react";
import "./App.css";
import Events from "./components/Events";
import LandingLoader from "./components/LandingLoader";

function App() {
  return (
    <div className="app">
      <LandingLoader />
      <Events />
    </div>
  );
}

export default App;
