import ExternalLinks from "./components/ExternalLinks";
import Header from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        Hello world!
      </div>
      <ExternalLinks />
    </main>
  );
}
