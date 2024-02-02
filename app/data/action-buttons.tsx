import { ActionButton } from "../types/action-button";
import styles from "./action-buttons.module.scss";

export const ActionButtonList: ActionButton[] = [
  { text: "Pet", imgSrc: ["u1f41f_u1f60a.png", "u1f41f_u1f970.png"], animateClass: styles.fade },
  { text: "Feed", imgSrc: ["u1f34c_u1f41f.png", "u1f34a_u1f41f.png", "u1f41f_u1f40c.png"], animateClass: styles.fade },
  {
    text: "Clean",
    imgSrc: ["u1f41f_u2601-ufe0f.png"],
    animateClass: styles.fade,
  },
  { text: "Play", imgSrc: ["u1f3c0_u1f41f.png", "u26bd_u1f41f.png"], animateClass: styles.fade },
  { text: "Hit", imgSrc: ["u1f41f_u1f4ab.png", "u1f41f_u1f62d.png"], animateClass: styles.fade },
  {
    text: "Medicine",
    imgSrc: ["u1f41f_u1f927.png", "u1f41f_u1f912.png", "u1f41f_u1f643.png", "u1f41f_u1f922.png"],
    animateClass: styles.fade,
  },
  { text: "Joke", imgSrc: ["u1f41f_u1f602.png", "u1f41f_u1f644.png"], animateClass: styles.fade },
  { text: "Lights", imgSrc: ["u1f41f_u1f634.png", "u1f41f_u1f31f.png"], animateClass: styles.fade },
  { text: "Dress", imgSrc: ["u1f41f_u1f451.png", "u1f41f_u1f33c.png", "u1f41f_u1f337.png", "u1f41f_u1f338.png"], animateClass: styles.fade },
];
