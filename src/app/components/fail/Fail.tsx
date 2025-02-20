import Button from "../button/Button";
import styles from "./Fail.module.css";

const Fail = () => {

  return (
    <div className={styles.ctr} >
  <p>Disastro totale! Mariano ha distrutto il bottone... <br/>
  Il link di affiliazione è andato perso per sempre... o forse no?<br/>
  Vuoi provare ancora a fermarlo?
  </p>
 
  <Button className={styles.btn} disabled={false} onClick={() => window.location.reload()}>
    Ricarica
  </Button>
</div>
  );
}

export default Fail;