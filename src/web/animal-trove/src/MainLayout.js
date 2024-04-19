 import React from 'react';
 import styles from './MainLayout.module.css';
import Navbar from './components/Navbar';
 
 export default function MainLayout({children}) {
   return (
     <div className={styles.container}>
        <div className={styles.sideBarContiner}>
            <Navbar />
        </div>
     <div className={styles.pageContainer}>
        {children}
    </div>
    </div>
   );
 }
