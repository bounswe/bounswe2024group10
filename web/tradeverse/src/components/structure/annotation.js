import React from "react";
import styles from "../styles/annotation.module.css";

const Annotation = ({ annotation, onClick }) => {
    return (
        <div className={styles.annotation} onClick={onClick}>
            <p>{annotation.body.value}</p>
        </div>
    );
};

export default Annotation;