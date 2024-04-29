//Home.js
import React, { useCallback, useRef, useState } from "react";
import MainLayout from "../MainLayout";
import mockData from "../constants/mockData";
import styles from "./ProfileSettings.module.css";
import { IconSettings } from "@tabler/icons-react";
export default function Settings() {
  const [username, setUsername] = useState(mockData.userData.username);
  const [bio, setBio] = useState(mockData.userData.perfonalInfo);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(mockData.userData.avatar);
  const fileInputRef = useRef(null);
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = () => {};
  const handleImageChange = useCallback(() => {
    // const file = fileInputRef.current.files[0];
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   setAvatar(e.target.result);
    // };
    // reader.readAsDataURL(file);
  }, []);
  return (
    <MainLayout>
      <h2>Settings</h2>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.avatarContainer}>
            <input
              ref={fileInputRef}
              onChange={handleImageChange}
              className={styles.imageInput}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
            <div className={styles.avatarSettingsButton}>
              <IconSettings />
            </div>
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </div>
          <button className={styles.deleteButton}>Delete Account</button>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.settingsItem}>
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="bio">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              id="bio"
              name="bio"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <h3 className={styles.passwordContainer}>Change Password</h3>
          <div className={styles.settingsItem}>
            <label htmlFor="password">Current Password</label>
            <input
              //   onChange={(e) => setEmail(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className={styles.settingsItem}>
            <label htmlFor="password">New Password</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSaveChanges();
            }}
            className={styles.saveButton}
          >
            Save Changes
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
