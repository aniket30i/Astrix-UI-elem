import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./MainSliderOne.module.css";
import mos1 from "../assets/pictures/barbie.png";
import mos2 from "../assets/pictures/pchead.jpg";
import mos3 from "../assets/pictures/gitcard.jpg";
import mos4 from "../assets/pictures/concert.jpg";
import Autoplay from "embla-carousel-autoplay";

export function MainSliderTwo() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <img src={mos1} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <img src={mos2} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <img src={mos3} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.emblaSlide}>
            <img src={mos4} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
}
