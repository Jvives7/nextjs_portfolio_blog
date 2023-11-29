import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {

  return (
    <main>
    <div className={styles.main}>
      <div className={styles.contents}>
        <h1>BajasSeaHorse</h1>
        <div className={styles.buttons}>
          <>
            <Link href="/about">
              <button>about</button>
            </Link>
          </>
          <>
            <Link href="/booking">
              <button>book a trip</button>
            </Link>
          </>
        </div>
      </div>
      </div>
      <video src={require('/public/video1.mp4')} autoPlay muted loop className={styles.video} />
    </main>
  );
}
