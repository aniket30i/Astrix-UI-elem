import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import pic from "../assets/pictures/pchead.jpg";
import styles from "./SimpleSlider.module.css";

export function SimpleSlider() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <span className={styles.holderComp}>
          <div className={styles.top}>
            <p className={styles.yearStamp}>2024</p>
            <p className={styles.credit}>
              By <strong>Pablo</strong>
            </p>
          </div>
          <p className={styles.collectibleName}>Collectible Name</p>
          <div className={styles.emblaSlide}>
            <img src={pic} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.top}>
            <p className={styles.yearStamp}>2024</p>
            <p className={styles.credit}>
              By <strong>Pablo</strong>
            </p>
          </div>
          <p className={styles.collectibleName}>Collectible Name</p>
          <div className={styles.emblaSlide}>
            <img src={pic} alt="" />
          </div>
        </span>

        <span className={styles.holderComp}>
          <div className={styles.top}>
            <p className={styles.yearStamp}>2024</p>
            <p className={styles.credit}>
              By <strong>Pablo</strong>
            </p>
          </div>
          <p className={styles.collectibleName}>Collectible Name</p>
          <div className={styles.emblaSlide}>
            <img src={pic} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
}
