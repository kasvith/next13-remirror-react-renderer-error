import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Render from "./render";

export default function Home() {
  return (
    <main className={styles.main}>
      <Render />
    </main>
  );
}
