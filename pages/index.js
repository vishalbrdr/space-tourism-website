import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import data from "../public/data.json";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className="Heading Heading-5">so, you want to travel to</p>
            <h1 className="Heading Heading-1">Space</h1>
            <p className={styles.text}>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&pos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div className={`${styles.explore} Heading Heading-4`}>
            <Link href={"/destination"}>
              <a>Explore</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
