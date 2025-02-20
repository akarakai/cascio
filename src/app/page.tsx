import Head from "next/head";
import Minigame from "./components/minigame/Minigame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link Affiliazione Amazon - Vinci Prima che Mariano Distrugga il Bottone!</title>
        <meta name="description" content="Ottieni il mio link di affiliazione Amazon prima che Mariano distrugga il bottone!" />
        <meta name="keywords" content="Amazon affiliazione, guadagna con Amazon, link di affiliazione, offerte Amazon, minigioco Amazon, Mariano bottone, gioco divertente, Boris" />
        <meta name="author" content="akarakai" />
        <meta property="og:title" content="Link Affiliazione Amazon - Vinci Prima che Mariano Distrugga il Bottone!" />
        <meta property="og:description" content="Riuscirai a prendere il link di affiliazione Amazon prima che Mariano distrugga il bottone? Gioca ora!" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.header}>Ottieni il mio Link di Affiliazione Amazon</h1>
          <h2 className={styles.miniheader}>Prima che Mariano distrugga il bottone...</h2>
          <p className={styles.description}>
            Gioca ora e scopri offerte esclusive con il mio link di affiliazione Amazon! 🛒⚡
          </p>
        </section>

        <section aria-label="Minigioco per ottenere il link di affiliazione">
          <Minigame />
        </section>
      </main>
    </>
  );
}
