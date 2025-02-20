import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.ctr} >
      <p> Sei riuscito fermare Mariano!</p>
      <p> Il link è stato copiato con successo nella tua clipboard. </p>
      <p>        Fanne buon uso. 
       </p>
    </div>
  );
}

export default Success;