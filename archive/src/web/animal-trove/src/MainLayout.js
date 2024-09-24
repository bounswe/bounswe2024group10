import React, { useContext } from "react";
import styles from "./MainLayout.module.css";
import Navbar from "./components/Navbar";
import { authContext } from "./context/AuthContext";
import { Link } from "react-router-dom";
import {
  IconUser,
  IconUserBolt,
  IconUserCircle,
  IconUserPin,
} from "@tabler/icons-react";

export default function MainLayout({ children }) {
  const { user } = useContext(authContext);
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.brandContainer}>
          <img src="./images/logo.png" className={styles.logo} alt="Logo" />
          <div className={styles.logoText}>Animal Trove</div>
        </div>

        {user ? (
          <div className={styles.userContainer}>
            <img
              src="/images/avatar.png"
              className={styles.userAvatar}
              alt=""
            />
            <Link to="/me" className={styles.userNameLink}>
              {user?.userName ?? ""}
            </Link>
          </div>
        ) : (
          <Link to="/auth" className={styles.loginButton}>
            Login
          </Link>
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.sideBarContainer}>
          <Navbar />
        </div>
        <div className={"animate-fade-in-up " + styles.pageContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}
