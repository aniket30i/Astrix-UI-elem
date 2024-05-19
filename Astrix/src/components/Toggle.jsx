import { useState } from "react";
import styles from "./Toggle.module.css";

function Toggle(props) {
  const [isToggled, setToggled] = useState(false);

  const buttonToggleHandler = (toggle) => {
    setToggled(toggle);
    props.toggleHandeler(toggle);
  };

  return (
    <div className={styles["btn-main"]}>
      <div
        className={styles["btn-text"]}
        onClick={() => {
          buttonToggleHandler(false);
        }}
      >
        <p>Events</p>
      </div>
      <div
        className={styles["btn-text"]}
        onClick={() => {
          buttonToggleHandler(true);
        }}
      >
        <p>Collections</p>
      </div>
      <div
        className={`${styles["btn-toggle"]} ${
          isToggled ? styles["btn-toggle-right"] : ""
        }`}
      ></div>
    </div>
  );
}

export default Toggle;
