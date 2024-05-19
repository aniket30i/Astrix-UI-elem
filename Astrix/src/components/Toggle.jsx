import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="Tog">
      <div
        className={`toggleBtn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <span className="thumb">
          <p>Events</p>
          <p>Collections</p>
        </span>
      </div>
    </div>
  );
}

export default Toggle;
