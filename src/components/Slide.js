import React from "react";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import styles from '../assets/index.module.css'
import { SlideCard } from "./SlideCard";
import { SlideContainer } from "./SlideContainer";

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down }) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));


  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
          }%`,
        opacity: distanceFactor * distanceFactor
      }}
      config={animationConfig}
    >
      {style => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
            <div key={index} className={`${styles.video}`}>

              {/* TODO: React player is a good choice here */}
              
              <video className={`${styles.video__player}`} width="640" height="360" controls>
                <source src={content} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* <!-- sidebar --> */}
              <div className={`${styles.videoSidebar}`}>
                <div className={`${styles.videoSidebar__button}`}>
                  <FavoriteBorderIcon className={`${styles["material-icons"]}`}></FavoriteBorderIcon>
                  {/* <p>12</p> */}
                </div>

                <div className={`${styles.videoSidebar__button}`}>
                  <MessageIcon className={`${styles["material-icons"]}`}></MessageIcon>
                  {/* <p>23</p> */}
                </div>

                {/* //TODO: need to set css properly to fit material icons on video sidebar, also set highlights for these icons  */}

                {/* <div className={`${styles.videoSidebar__button}`}>
                  <ShareIcon className={`${styles["material-icons"]}`}></ShareIcon>
                  <p>75</p>
                </div> */}
              </div>

              {/* //TODO: Need to set proper footer for the videcard to look more decent and add extra features to it. */}
              
              {/* <div className={`${styles.videoFooter}`}>
                <div className={`${styles.videoFooter__text}`}>
                  <h3>Somanath Goudar</h3>
                  <p className={`${styles.videoFooter__description}`}>Best Video Ever</p>

                  <div className={`${styles.videoFooter__ticker}`}>
                    <MusicNoteIcon className={`${styles["material-icons"]} ${styles.videoFooter__icon}`}></MusicNoteIcon>
                    <MarqueeComponent></MarqueeComponent>
                  </div>
                </div>
                <img
                  src="https://static.thenounproject.com/png/934821-200.png"
                  alt=""
                  className={`${styles.videoFooter__record}`}
                />
              </div> */}
            </div>
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
