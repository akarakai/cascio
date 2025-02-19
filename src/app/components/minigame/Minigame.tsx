"use client"

import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import Healthbar from "../healthbar/Healthbar";
import Bat from "../mariano/bat/Bat";
import Mariano from "../mariano/Mariano";
import styles from "./Minigame.module.css"
import Success from "../success/Success";
import Fail from "../fail/Fail";

const Minigame = () => {
  const [totDmg, setTotDmg] = useState(0);
  const [isHitting, setIsHitting] = useState(false);
  const [isBtnClicked, setBtnClicked] = useState(false);

  useEffect(() => {
    if (totDmg >= 100 || isBtnClicked) return;
    const damageInterval = setInterval(() => {
      setTotDmg(prev => Math.min(prev + 10, 100));
      
      setIsHitting(true);
      
      setTimeout(() => {
        setIsHitting(false);
      }, 300);
      
    }, 1000); 
    
    return () => {
      clearInterval(damageInterval);
      setIsHitting(false); // Ensure animation stops
    };
  }, [isBtnClicked]); // Only re-run when button is clicked

  const handleButtonClick = () => {
    setBtnClicked(true);
  };

  return (
    <>
      <article className={styles.container}>
        <Button 
          disabled={totDmg >= 100} 
          onClick={handleButtonClick}
        />
        <div className={styles.imgContainer}>
          <Mariano />
          <Bat isHitting={isHitting} />
        </div>
      </article>
      <Healthbar dmg={totDmg} />

      {(totDmg < 100 && isBtnClicked) && <Success />}
      {(totDmg >= 100 && !isBtnClicked) && <Fail />}
    </>
  );
};

export default Minigame;