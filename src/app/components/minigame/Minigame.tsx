"use client"

import { useEffect, useState } from "react";
import Button from "../button/Button";
import Healthbar from "../healthbar/Healthbar";
import Bat from "../mariano/bat/Bat";
import Mariano from "../mariano/Mariano";
import styles from "./Minigame.module.css"

const Minigame = () => {
  const [totDmg, setTotDmg] = useState(0);
  const [isHitting, setIsHitting] = useState(false);

  useEffect(() => {
    const hit = async () => {
      if (totDmg >= 100) return;
        const interval = setInterval(() => {
        setTotDmg(prevDmg => {
          const newDmg = Math.min(prevDmg + 10, 100);
          if (newDmg >= 100) {
            clearInterval(interval);
          }
          
          return newDmg;
        });
        
        setIsHitting(true);
        
        setTimeout(() => {
          setIsHitting(false);
        }, 300); 
        
      }, 1000); 
      
      return () => clearInterval(interval);
    };

    hit();
  }, []); 

  return (
    <>
      <article className={styles.container}>
        <Button disabled={totDmg >= 100} />
        <div className={styles.imgContainer}>
          <Mariano />
          <Bat isHitting={isHitting} />
        </div>
      </article>
      <Healthbar dmg={totDmg} />
    </>
  );
};

export default Minigame;