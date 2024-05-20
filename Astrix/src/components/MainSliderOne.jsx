import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./MainSliderOne.module.css";
import mos1 from "../assets/pictures/dj.jpg";
import mos2 from "../assets/pictures/pchead.jpg";
import mos3 from "../assets/pictures/beercup.jpg";
import mos4 from "../assets/pictures/concert.jpg";
import Autoplay from "embla-carousel-autoplay";
import pindrop from "../assets/pictures/pin.png";

export function MainSliderOne() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <div className={styles.overlay}>
              <h3>Event Name</h3>
              <h4>
                <img src={pindrop}></img> Location
              </h4>
            </div>
            <img src={mos1} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <div className={styles.overlay}>
              <h3>Event Name</h3>
              <h4>
                <img src={pindrop}></img> Location
              </h4>
            </div>
            <img src={mos2} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <div className={styles.overlay}>
              <h3>Event Name</h3>
              <h4>
                <img src={pindrop}></img> Location
              </h4>
            </div>
            <img src={mos3} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <div className={styles.overlay}>
              <h3>Event Name</h3>
              <h4>
                <img src={pindrop}></img> Location
              </h4>
            </div>
            <img src={mos4} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
}
