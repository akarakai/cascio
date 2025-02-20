"use client"

import { ReactNode } from "react";
import styles from "./Button.module.css"

type ButtonProps = {
  onClick: () => void;
  className?: string;
  disabled: boolean;
  children: ReactNode
}

const Button = ({ className, disabled, onClick, children }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
     {children}
    </button>
  )
}

export default Button;