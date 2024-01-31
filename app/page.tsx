'use client';

import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  const imgAssetBasePath = "/FishAreFriends/assets/imgs/";
  const fishBounceAnimateClass = styles.fade;
  const buttonCircleRadius = 200;

  const fishDefaultBasic = "u1f41f_u1f642.png";
  const fishActionHit = "u1f41f_u1f4ab.png";

  const [currentFish, setCurrentFish] = useState(fishDefaultBasic);
  let actionButtons = ["Pet", "Feed", "Clean", "Play", "Hit", "Medicine", "Joke", "Lights", "Dress"];

  const [currentFishClass, setCurrentFishClass] = useState<string>("")

  const delayedChangeToDefault = (millis: number) => {
    setTimeout(() => {
      setCurrentFish(fishDefaultBasic);
      setCurrentFishClass(fishBounceAnimateClass);
    }, millis);
  }

  const changeCurrentFish = (newSource: string) => {
    setCurrentFish(newSource);
    setCurrentFishClass(fishBounceAnimateClass);
    delayedChangeToDefault(5000);
  }

  const get_center_img_path = () => {
    return imgAssetBasePath + currentFish
  }

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
            onClick={() => changeCurrentFish(fishActionHit)}
            style={
              {
                "--radial-action-button-y":
                  buttonCircleRadius *
                    Math.sin((2 * Math.PI * i) / actionButtons.length) +
                  "px",
                "--radial-action-button-x":
                  0-(buttonCircleRadius *
                    Math.cos((2 * Math.PI * i) / actionButtons.length)) +
                  "px",
              } as React.CSSProperties
            }
          >
            {action}
          </button>
        ))}
      </div>
    </main>
  );
}
