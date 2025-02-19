import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.ctr} >
      <p> Sei riuscito finalmente a far calmare Mariano!</p>
      <p> Il link è stato copiato con successo nella tua clipboard. <br/> Fanne buon uso. </p>
    </div>
  );
}

export default Success;