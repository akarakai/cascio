import Image from "next/image";
import styles from "./bat.module.css";

type BatProps = {
  className?: string;
}

const Bat = ({ className }: BatProps) => {
  return (
    <div  className={styles.bat} >
     <Image src="/bat.png" alt='mazza' width="271" height="271"/>
    </div>
  );
}

export default Bat;