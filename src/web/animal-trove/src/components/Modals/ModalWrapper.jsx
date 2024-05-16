import React from "react";
import styles from "./ModalWrapper.module.css";
export default function ModalWrapper({ isOpened, children, onClose }) {
  return (
    <div
      style={{
        transition: "opacity 0.16s",
        pointerEvents: isOpened ? "auto" : "none",
        opacity: isOpened ? 1 : 0,
      }}
      className={styles.container}
    >
      <div onClick={onClose} className={styles.layout}></div>
      <div
        style={{
          transition: "all 0.16s",
          transform: `scale(${isOpened ? 1 : 0.96})`,
        }}
        className={styles.contentContainer}
      >
        {children}
      </div>
    </div>
  );
}
