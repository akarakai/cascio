"use client"

import { ReactNode } from "react";
import styles from "./Button.module.css"

type ButtonProps = {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={() => console.log('ciao')}>
     Clicca Qui
    </button>
  )
}

export default Button;