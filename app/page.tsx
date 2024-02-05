"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import { ActionButton } from "./types/action-button";
import { ActionButtonList } from "./data/action-buttons";

export default function Home() {
  const imgAssetBasePath = "/FishAreFriends/assets/imgs/";
  const buttonCircleRadius = 200;

  const fishDefaultImg = "u1f41f_u1f642.png";
  const fishDefaultAnimate = styles.fade;

  const [currentFishImg, setCurrentFishImg] = useState(fishDefaultImg);
  let actionButtons: ActionButton[] = ActionButtonList;

  const [currentFishClass, setCurrentFishClass] = useState<string>("");

  const delayedChangeToDefault = (millis: number) => {
    setTimeout(() => {
      setCurrentFishImg(fishDefaultImg);
      setCurrentFishClass(fishDefaultAnimate);
    }, millis);
  };

  const changeCurrentFish = (button: ActionButton) => {
    setTimeout(() => {
      const randomImg =
      button.imgSrc[Math.floor(Math.random() * button.imgSrc.length)];
      setCurrentFishImg(randomImg);
      setCurrentFishClass(button.animateClass);
      delayedChangeToDefault(2000);
    }, button.preDelay);
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
          <div
            key={i}
            onClick={() => changeCurrentFish(action)}
            className={styles.radial_action_button_wrapper}
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
            <div key={i} className={styles.radial_action_button}>
              {action.text}
            </div>
            <div
              className={
                i % 5 === 0
                  ? styles.action_button_background_triangle_iso
                  : i % 5 === 1 
                    ? styles.action_button_background_rectangle
                    : i % 5 === 2
                      ? styles.action_button_background_hcircle
                      : i % 5 === 3
                        ? styles.action_button_background_triangle_equ
                        : styles.action_button_background_square
              }
            />
          </div>
        ))}
      </div>
    </main>
  );
}
