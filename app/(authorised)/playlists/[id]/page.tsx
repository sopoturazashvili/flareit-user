"use client";

import TopFourHits from "@/app/Components/TopFourHits/TopFourHits";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ChartCard from "@/app/Components/ChartCard/ChartCard";
import TopFourCharts from "@/app/Components/TopFourCharts/TopFourCharts";

const playlist = () => {
  const [data, setData] = useState<any>("")
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.pathname);
    }
  }, []);


  return (
    <div className={styles.container}>
      <div>
        <span className={styles.pageName}>{currentUrl}</span>
      </div>
      <div className={styles.photoAndNameCont}>
        <div className={styles.photoAndName}>
          <img src="/images/playlistPhoto.svg" />
          <span className={styles.name}>My Everyday</span>
        </div>
      </div>
      <div className={styles.topFourHits}>
          <TopFourHits/>
          {/* <TopFourHits/>
          <TopFourHits/> */}
      </div>
    </div>
  );
};

export default playlist;
