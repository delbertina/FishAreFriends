"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import { ActionButton } from "./types/action-button";

export default function Home() {
  const imgAssetBasePath = "/FishAreFriends/assets/imgs/";
  const buttonCircleRadius = 200;

  const fishDefaultImg = "u1f41f_u1f642.png";
  const fishDefaultAnimate = styles.fade;

  const [currentFishImg, setCurrentFishImg] = useState(fishDefaultImg);
  let actionButtons: ActionButton[] = [
    { text: "Pet", imgSrc: "u1f41f_u1f60a.png", animateClass: styles.fade },
    { text: "Feed", imgSrc: "u1f34c_u1f41f.png", animateClass: styles.fade },
    {
      text: "Clean",
      imgSrc: "u1f41f_u2601-ufe0f.png",
      animateClass: styles.fade,
    },
    { text: "Play", imgSrc: "u1f3c0_u1f41f.png", animateClass: styles.fade },
    { text: "Hit", imgSrc: "u1f41f_u1f4ab.png", animateClass: styles.fade },
    {
      text: "Medicine",
      imgSrc: "u1f41f_u1f927.png",
      animateClass: styles.fade,
    },
    { text: "Joke", imgSrc: "u1f41f_u1f602.png", animateClass: styles.fade },
    { text: "Lights", imgSrc: "u1f41f_u1f634.png", animateClass: styles.fade },
    { text: "Dress", imgSrc: "u1f41f_u1f451.png", animateClass: styles.fade },
  ];

  const [currentFishClass, setCurrentFishClass] = useState<string>("");

  const delayedChangeToDefault = (millis: number) => {
    setTimeout(() => {
      setCurrentFishImg(fishDefaultImg);
      setCurrentFishClass(fishDefaultAnimate);
    }, millis);
  };

  const changeCurrentFish = (button: ActionButton) => {
    setCurrentFishImg(button.imgSrc);
    setCurrentFishClass(button.animateClass);
    delayedChangeToDefault(2000);
  };

  const get_center_img_path = () => {
    return imgAssetBasePath + currentFishImg;
  };

  return (
    <main className={styles.main}>
      <div
        className={styles.action_button_container}
        style={
          {
            "--action-button-container-padding": buttonCircleRadius + "px",
          } as React.CSSProperties
        }
      >
        <Image
          src={get_center_img_path()}
          alt="Fish emoji normal face"
          className={currentFishClass}
          onAnimationEnd={() => setCurrentFishClass("")}
          height={100}
          width={100}
          priority
        ></Image>
        {actionButtons.map((action, i) => (
          <button
            key={i}
            className={styles.radial_action_button}
            onClick={() => changeCurrentFish(action)}
            style={
              {
                "--radial-action-button-y":
                  buttonCircleRadius *
                    Math.sin((2 * Math.PI * i) / actionButtons.length) +
                  "px",
                "--radial-action-button-x":
                  0 -
                  buttonCircleRadius *
                    Math.cos((2 * Math.PI * i) / actionButtons.length) +
                  "px",
              } as React.CSSProperties
            }
          >
            {action.text}
          </button>
        ))}
      </div>
    </main>
  );
}
