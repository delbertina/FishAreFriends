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

  const getFilteredActions = (age: number): ActionButton[] => {
    return ActionButtonList.filter(
      (item) =>
        !item.ageRequirement || item.ageRequirement <= age
    )
  }

  const [currentFishImg, setCurrentFishImg] = useState(fishDefaultImg);
  const [currentFishClass, setCurrentFishClass] = useState<string>("");
  const [currentFishAge, setCurrentFishAge] = useState<number>(0);
  const [currentFishActions, setCurrentFishActions] = useState<Array<ActionButton>>(getFilteredActions(0));
  
  const delayedChangeToDefault = (millis: number) => {
    setTimeout(() => {
      const newFishAge = currentFishAge + 1;
      setCurrentFishImg(fishDefaultImg);
      setCurrentFishClass(fishDefaultAnimate);
      setCurrentFishAge(newFishAge);
      setCurrentFishActions(getFilteredActions(newFishAge));
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
        {currentFishActions
          .map((action, i) => (
            <div
              key={i}
              onClick={() => changeCurrentFish(action)}
              className={styles.radial_action_button_wrapper}
              style={
                {
                  "--radial-action-button-y":
                    buttonCircleRadius *
                      Math.sin((2 * Math.PI * i) / currentFishActions.length) +
                    "px",
                  "--radial-action-button-x":
                    0 -
                    buttonCircleRadius *
                      Math.cos((2 * Math.PI * i) / currentFishActions.length) +
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
      <div>
        Your fish is <strong>{currentFishAge}</strong>{" "}
        {/* Would you just look at that detail oriented feature right below! */}
        {currentFishAge === 1 ? "year" : "years"} old 
      </div>
    </main>
  );
}
