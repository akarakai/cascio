import styles from "./Healthbar.module.css";
type HealthbarProps = {
  dmg: number;
}
const Healthbar = ({ dmg }: { dmg: number }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBar} style={{ width: `${dmg}%` }}></div>
    </div>
  );
};

export default Healthbar;