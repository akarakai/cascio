import Button from "./components/button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.header}> 
        Ottieni il mio link di affiliazione Amazon
      </h1>
      <h2 className={styles.miniheader}> Prima che Mariano distrugga il bottone...</h2>
      <Button />
    </main>
  );
}
