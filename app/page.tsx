import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const imgAssetBasePath = "/FishAreFriends/assets/imgs/";
  const buttonCircleRadius = 200;

  const fishDefaultBasic = "u1f41f_u1f642.png";

  let currentFish = fishDefaultBasic;
  let actionButtons = ["Pet", "Feed", "Clean", "Play", "Hit", "Medicine", "Joke", "Lights", "Dress"];

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
          height={100}
          width={100}
        ></Image>
        {actionButtons.map((action, i) => (
          <button
            key={i}
            className={styles.radial_action_button}
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
