import styles from "./LandingLoader.module.css";
import { useState, useEffect } from "react";
import {
  blackLogo,
  concertImg,
  flowerImg,
  flowersMountainImg,
  holiImage,
  kkImage,
  partyImage,
  publicSelfieImage,
  skyBlooneImage,
} from "../assets/pictures/index.js";

const LandingLoader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initially hide the component
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsVisible(false); // Remove the component from the screen on click
  };
  return (
    <div
      className={`${styles["landing-container"]} ${
        isVisible ? styles.show : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles["landing-container_sub"]}>
        <div className={styles["landing-logo"]}>
          <img src={blackLogo} alt={"logo"} />
          <p>Astrix.</p>
        </div>
        <div className={styles["main-container"]}>
          <div className={styles["text-section-sub_one"]}>
            <div
              className={`${styles["first-text-div"]} ${styles["text-div"]}`}
            >
              <p>WE</p>
              <div className={styles["image-div"]}>
                <img src={partyImage} alt={"partyimage"} />
              </div>
              <p>ORGANIZE</p>
              <p>THE</p>
            </div>
            <div className={`${styles["snd-text-div"]} ${styles["text-div"]}`}>
              <p>CONNECTION</p>
              <div className={styles["image-div"]}>
                <img src={flowersMountainImg} alt={"flowermountain"} />
              </div>
            </div>
          </div>
          <div className={styles["text-section-sub_two"]}>
            <div
              className={`${styles["third-text-div"]} ${styles["text-div"]}`}
            >
              <div className={styles["image-div"]}>
                <img src={publicSelfieImage} alt={"publicSelfieImage"} />
              </div>
              <p>BETWEEN</p>
              <div className={styles["image-div-fixed"]}>
                <img src={kkImage} alt={"kk"} />
              </div>
              <p>MUSIC</p>
            </div>
            <div
              className={`${styles["forth-text-div"]} ${styles["text-div"]}`}
            >
              <p>ARTIST</p>
              <div className={styles["image-div"]}>
                <img src={concertImg} alt={"concertimage"} />
              </div>
              <p>CULTURE</p>
              <div
                className={`${styles["image-div"]} ${styles["img-size-change"]}`}
              >
                <img src={holiImage} alt={"holi"} />
              </div>
            </div>
            <div
              className={`${styles["fifth-text-div"]} ${styles["text-div"]}`}
            >
              <div className={styles["image-div"]}>
                <img src={flowerImg} alt={"flower"} />
              </div>
              <p>ART</p>
              <div className={styles["image-div-fixed"]}>
                <img src={skyBlooneImage} alt={"skybloone"} />
              </div>
              <p>&</p>
              <p>COLLECTIONS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLoader;
