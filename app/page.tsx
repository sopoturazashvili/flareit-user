"use client"

import Image from "next/image";
import styles from "./page.module.scss";
import Input from "./Components/Input/Input";


export default function Home() {
  return (
    <main className={styles.main}>
        <Input type={"password"} />
    </main>
  );
}
