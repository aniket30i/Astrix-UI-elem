import React from "react";
import styles from "./Collections.module.css";
import hd1 from "../assets/pictures/head1.jpg";
import hd2 from "../assets/pictures/head2.jpg";
import hd3 from "../assets/pictures/head3.jpg";
import hd4 from "../assets/pictures/head4.jpg";
import hd5 from "../assets/pictures/head5.jpg";

function Collections() {
  return (
    <div className={styles.overTransLayerCol}>
      <div className={styles.eventImgRun}>Running images</div>
      <div className={styles.venueStrip}>Running venue strip</div>

      <div className={styles.semSidePanel}>
        <div className={styles.tagLine}>
          <h2>Explore Your First</h2>
          <h2>Collectible</h2>
        </div>
        <div className={styles.focusBox}>
          <div className={styles.focusName}>
            <h1>Meta</h1>
            <h1>Lives</h1>
          </div>
        </div>
        <div className={styles.subFocus}>
          <span className={styles.slog}>
            <h3>Live in Astrix</h3>
          </span>
        </div>
        <div className={styles.focusDetails}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            assumenda harum aut consequuntur, vel atque voluptas. Voluptatum
            ducimus nostrum.
          </p>
        </div>
        <div className={styles.headShots}>
          <div className={styles.headshotContainer}>
            <img src={hd1} alt="" />
            <img src={hd2} alt="" />
            <img src={hd3} alt="" />
            <img src={hd4} alt="" />
            <img src={hd5} alt="" />
          </div>
          <h3>22K people interested</h3>
        </div>
      </div>
    </div>
  );
}

export default Collections;
