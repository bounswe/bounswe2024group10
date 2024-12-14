import React, { useState } from "react";
import styles from "../styles/annotation.module.css";

const Annotation = ({ annotation, onClick, isSelected }) => {
    return (
        <div
            className={`${styles.annotation} ${isSelected ? styles.selected : ""}`}
            onClick={onClick}
        >
            <div className={styles.header}>
                <h2 className={styles.creator}>{annotation.creator}</h2>
                <span className={styles.date}>
                    {new Date(annotation.creationDate).toLocaleString()}
                </span>
            </div>
            <p className={styles.body}>{annotation.body.value}</p>
        </div>
    );
};

export default Annotation;
