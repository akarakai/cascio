"use client"

import { ReactNode } from "react";
import styles from "./Button.module.css"

type ButtonProps = {
  onClick: () => void;
  className?: string;
  disabled: boolean;
}

const Button = ({ className, disabled, onClick }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
     Clicca Qui
    </button>
  )
}

export default Button;