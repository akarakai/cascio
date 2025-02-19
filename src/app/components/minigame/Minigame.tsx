"use client"

import Button from "../button/Button";
import Healthbar from "../healthbar/Healthbar";
import Bat from "../mariano/bat/Bat";
import Mariano from "../mariano/Mariano";
import styles from "./Minigame.module.css"

const Minigame = () => {
  return (
    <>
    <article className={styles.container}>
     <Button />
     <div >
      <Mariano />
      <Bat />
     </div>
     </article>

     <Healthbar/>
     </>
   
  );
}

export default Minigame;