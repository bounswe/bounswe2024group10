import React from "react";
import styles from "./MainLayout.module.css";
import Navbar from "./components/Navbar";

export default function MainLayout({ children }) {
  return (
    
    <div> 
    {/* Header */}
    <div className={styles.headerContainer}>
    <img src="./images/logo.png" className={styles.logo} alt="Logo" />
    <div className={styles.logoText}>Animal Trove</div>
    </div>
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <Navbar />
      </div>
      <div className={styles.pageContainer}>{children}</div>
    </div>
  </div> 
  );
}
