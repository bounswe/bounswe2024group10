//Home.js
import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../MainLayout";
import PostCard from "../components/PostCard";
import mockData from "../constants/mockData";
import styles from "./NewPost.module.css";
import AuthenticatedPage from "../components/AuthenticatedPage";
import { toast } from "react-toastify";
import { IconLoader } from "@tabler/icons-react";
import { mockRequest } from "../services/mockService";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/post";
import { authContext } from "../context/AuthContext";

const InputBox = ({ placeHolder, value, onChange, label }) => {
  return (
    <div className={styles.inputBox}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.input}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        placeholder={placeHolder}
        type="text"
      />
    </div>
  );
};

const TextArea = ({ placeHolder, value, onChange, label }) => {
  return (
    <div className={styles.inputBox}>
      <span className={styles.inputLabel}>{label}</span>
      <textarea
        className={styles.textArea}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        placeholder={placeHolder}
        type="text"
      />
    </div>
  );
};

export default function NewPost() {
  const [media, setMedia] = useState(null);
  const [image, setImage] = useState(null);
  const [animalName, setAnimalName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);
  const { user } = useContext(authContext);

  const navigate = useNavigate();
  const handlePost = async () => {
    if (!media || !animalName) {
      toast.error("Please upload an image and provide a name for the animal");
      return;
    }
    try {
      setPostError(null);
      setPostLoading(true);
      const response = await createPost({
        username: user.userName,
        media,
        caption,
        location,
        animalName,
      });
      if (response.success) {
        toast.success("Post Created Successfully");
        window.setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setPostError(error.message);
    } finally {
      setPostLoading(false);
    }
  };

  function handleChange(e) {
    const targetFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64String = e.target.result.split(",")[1];
      setMedia(base64String);
    };
    reader.readAsDataURL(targetFile); // Read the file as a data URL (Base64)
    setImage(URL.createObjectURL(targetFile));
  }

  return (
    <AuthenticatedPage>
      <MainLayout>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <input
              className={styles.imagePicker}
              type="file"
              onChange={handleChange}
            />
            {!image ? (
              <div className={styles.imagePlaceholder}>
                <h1 className={styles.imagePlaceholderText}>Upload an Image</h1>
              </div>
            ) : (
              <></>
            )}
            {image ? (
              <img
                style={{
                  width: "100%",
                }}
                width={400}
                src={image}
                alt=""
              />
            ) : (
              <></>
            )}
          </div>

          <div className={styles.inputsContainer}>
            <InputBox
              placeHolder={"Name"}
              onChange={setAnimalName}
              value={animalName}
            />
            {/* <InputBox placeHolder={"Date"} onChange={setDate} value={date} /> */}
            <InputBox
              placeHolder={"Location"}
              onChange={setLocation}
              value={location}
            />
            <TextArea
              placeHolder={"Caption"}
              onChange={setCaption}
              value={caption}
            />
            <div className={styles.buttonsContainer}>
              <div
                onClick={() => {
                  navigate("/");
                }}
                className={styles.button + " " + styles.cancelButton}
              >
                Cancel
              </div>
              <div onClick={handlePost} className={styles.button}>
                {!postLoading ? (
                  "Post"
                ) : (
                  <div className={styles.loadingContainer}>
                    <IconLoader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
}
