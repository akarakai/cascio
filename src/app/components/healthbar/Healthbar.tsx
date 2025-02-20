import styles from "./Healthbar.module.css";

const Healthbar = ({ dmg }: { dmg: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBar} style={{ width: `${dmg}%` }}></div>
    </div>
  );
};

export default Healthbar;