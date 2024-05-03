import React from "react";
import styles from "./AnimalCard.module.css";
export default function AnimalCard(data) {
  return (
    <div className={styles.container}>
      <img src={data?.image ?? ""} className={styles.image} alt="Animal" />
      <div className={styles.name}>{data?.name ?? ""}</div>
      <div className={styles.species}>{data?.species ?? ""}</div>
    </div>
  );
}
