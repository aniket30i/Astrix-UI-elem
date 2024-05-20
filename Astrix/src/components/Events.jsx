import { useState } from "react";
import styles from "./Events.module.css";
import pin from "../assets/pictures/pin.png";
import clock from "../assets/pictures/clock.png";
import art1 from "../assets/pictures/artist3.jpeg";
import art2 from "../assets/pictures/artist2.jpg";
import art3 from "../assets/pictures/artist1.jpeg";
import hd1 from "../assets/pictures/head1.jpg";
import hd2 from "../assets/pictures/head2.jpg";
import hd3 from "../assets/pictures/head3.jpg";
import hd4 from "../assets/pictures/head4.jpg";
import hd5 from "../assets/pictures/head5.jpg";
import qr from "../assets/pictures/qr_code.png";
import lg from "../assets/pictures/logo_1.png";
import { MainSliderOne } from "./MainSliderOne";
import Toggle from "./Toggle";
import { FeatureSlider } from "./FeatureSlider";
import { MainSliderTwo } from "./MainSliderTwo";
import { SimpleSlider } from "./SimpleSlider";

function Events() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = (toggle) => {
    setIsToggle(toggle);
  };

  return (
    <div className={styles.backGround}>
      {!isToggle && (
        <>
          <div className={styles.backGroundTpLayer}>
            <img className={styles.lgImg} src={lg} alt="astrix_logo"></img>
            <h1 className={styles.brandNm}>Astrix.</h1>
          </div>

          <div className={styles.midBranding}>
            <div className={styles.backGroundMidTop}>
              <h1>ASTR</h1>
              <h1>IX</h1>
            </div>

            <div className={styles.backGroundMidLow}>
              <h1>EVE</h1>
              <h1>NTS</h1>
            </div>
          </div>
        </>
      )}
      ;
      {isToggle && (
        <>
          <div className={styles.backGroundTpLayer}>
            <img className={styles.lgImg} src={lg} alt="astrix_logo"></img>
            <h1 className={styles.brandNm}>Astrix.</h1>
          </div>

          <div className={styles.midBranding}>
            <div className={styles.backGroundMidTop}>
              <h1>ASTR</h1>
              <h1>IX</h1>
            </div>

            <div className={styles.backGroundMidLow}>
              <h1>COLL</h1>
              <h1>ECTI</h1>
              <h1>BLE</h1>
            </div>
          </div>
        </>
      )}
      ;
      <div className={styles.overTransLayerEv}>
        <div className={styles.eventImgRun}>
          {!isToggle && <MainSliderOne />}
          {isToggle && <FeatureSlider />}
          {isToggle && <MainSliderTwo />}
          <Toggle toggleHandeler={toggleHandler} />
        </div>
        <div className={styles.venueStrip}>
          {!isToggle && (
            <div className={styles.MovingText}>
              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Lives , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>

              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Lives , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>

              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Lives , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>
            </div>
          )}

          {isToggle && (
            <div className={styles.MovingText}>
              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Lives , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>

              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Lives , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>

              <div className={styles.con}>
                <p>Event : Oasis Bus tour , JLN Stadium , Delhi</p>
                <div className={styles.bpdot}></div>
                <p>Collection Live: Meta Live , JLN Stadium, Delhi</p>
                <div className={styles.bpdot}></div>
              </div>
            </div>
          )}
        </div>

        {!isToggle && (
          <div className={styles.semSidePanel}>
            <div className={styles.tagLine}>
              <h2>Explore Your First</h2>
              <h2>Event</h2>
            </div>
            <div className={styles.focusBox}>
              <div className={styles.focusName}>
                <h1>Event Name</h1>
              </div>
              <div className={styles.subFocus}>
                <span className={styles.pin}>
                  <img src={pin}></img>
                  <h3>Venue</h3>
                </span>
                <span className={styles.dateTime}>
                  <img src={clock}></img>
                  <h3>04/3/2024 @19:00</h3>
                </span>
              </div>
              <div className={styles.focusDetails}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  assumenda harum aut consequuntur, vel atque voluptas.
                  Voluptatum ducimus nostrum.
                </p>
              </div>
            </div>
            <div className={styles.tagSubFocus}>
              <h2>Artist Lineup</h2>
              <div className={styles.imgFocus}>
                <span>
                  <img src={art1} alt="xyz" />
                </span>

                <span>
                  <img src={art2} alt="xyz" />
                </span>

                <span>
                  <img src={art3} alt="xyz" />
                </span>
              </div>
            </div>
            <div className={styles.userInteraction}>
              <div className={styles.qrcontainer}>
                <img className={styles.qrcode} src={qr} alt="" />
              </div>
              <div className={styles.joinBtn}>
                <p>Join Waitlist</p>
              </div>
            </div>
          </div>
        )}

        {isToggle && (
          <div className={styles.semSidePanelX}>
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
            <div className={styles.collections}>
              <h3>Collectibles</h3>
              <div className="slidingCard">
                <SimpleSlider />
              </div>
            </div>
            <div className={styles.joinBtnX}>
              <p>Join Waitlist</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
