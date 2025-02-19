"use client"

import { ReactNode } from "react";
import styles from "./Button.module.css"

type ButtonProps = {
  className?: string;
  disabled: boolean;
}

const Button = ({ className, disabled }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={() => console.log('ciao')} disabled={disabled}>
     Clicca Qui
    </button>
  )
}

export default Button;