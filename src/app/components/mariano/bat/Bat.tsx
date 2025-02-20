import Image from "next/image";
import styles from "./bat.module.css";

type BatProps = {
  className?: string;
  isHitting: boolean;
}

const Bat = ({ isHitting }: BatProps) => {
  return (
    <div  className={styles.bat} >
     <Image src="/bat.png" alt='mazza' width="271" height="271" className={`${isHitting ? styles.hittingImg : ''}`}
     />
    </div>
  );
}

export default Bat;