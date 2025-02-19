import Image from "next/image";
import styles from "./Mariono.module.css"

type MarianoProps = {
  className?: string
}


const Mariano = ({ className }: MarianoProps) => {
  return (
    <div className={styles.imgContainer}>
      <Image className={styles.img} src="/mariano.png" alt="mariano" width="370" height="370"/>
    </div>
  )
}

export default Mariano;