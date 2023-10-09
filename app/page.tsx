import Countries from "./components/Countries/Countries";
import styles from './Page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
     <Countries />
    </main>
  )
}
