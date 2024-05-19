import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./FeatureSlider.module.css";
import Autoplay from "embla-carousel-autoplay";
export function FeatureSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className={styles.emblaF} ref={emblaRef}>
      <div className={styles.emblaContainerF}>
        <div className={styles.emblaSlideF}>
          <h3 className={styles.venLoc}>Lunar Palace:</h3>
          <h3 className={styles.ft}>(ft. Kanye west)</h3>
        </div>

        <div className={styles.emblaSlideF}>
          <h3 className={styles.venLoc}>Lunar Palace:</h3>
          <h3 className={styles.ft}>(ft. Kanye west)</h3>
        </div>
        <div className={styles.emblaSlideF}>
          <h3 className={styles.venLoc}>Lunar Palace:</h3>
          <h3 className={styles.ft}>(ft. Kanye west)</h3>
        </div>

        <div className={styles.emblaSlideF}>
          <h3 className={styles.venLoc}>Lunar Palace:</h3>
          <h3 className={styles.ft}>(ft. Kanye west)</h3>
        </div>
      </div>
    </div>
  );
}
