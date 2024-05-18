import React from "react";

function Collections() {
  return (
    <div className={styles.overTransLayer}>
      <div className={styles.eventImgRun}>Running images</div>
      <div className={styles.venueStrip}>Running venue strip</div>

      <div className={styles.semSidePanel}>
        <div className="tag-line"></div>
        <div className="focus-box">
          <div className="focus-name"></div>
          <div className="sub-focus"></div>
          <div className="focus-details"></div>
        </div>
        <div className="tag-sub-focus">
          <h2></h2>
          <div className="img-focus"></div>
        </div>
        <div className="user-interaction"></div>
      </div>
    </div>
  );
}

export default Collections;
