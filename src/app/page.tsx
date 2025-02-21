import Head from "next/head";
import Minigame from "./components/minigame/Minigame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section>
          <h1 className={styles.header}>Ottieni il mio Link di Affiliazione Amazon</h1>
          <h2 className={styles.miniheader}>Prima che Mariano distrugga il bottone...</h2>
        </section>

        <section aria-label="Minigioco per ottenere il link di affiliazione">
          <Minigame />
        </section>
      </main>
    </>
  );
}
