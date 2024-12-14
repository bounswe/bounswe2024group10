import React, { useState } from "react";
import { createSubforum } from "../services/subforum"; // Import the service function
import styles from "./styles/CreateSubforum.module.css"; // Import styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSubforum = () => {
  const [subforumData, setSubforumData] = useState({
    name: "",
    description: "",
    tagColor: "",
  });
  const [loading, setLoading] = useState(false);

  // Predefined colors
  const colorOptions = [
    { label: "Blue", value: "#5d5fef" },
    { label: "Red", value: "#FF6384" },
    { label: "Yellow", value: "#FFCE56" },
    { label: "Green", value: "#4BC0C0" },
    { label: "Orange", value: "#FDB45C" },
    { label: "Purple", value: "#9B59B6" },
    { label: "Teal", value: "#1ABC9C" },
    { label: "Pink", value: "#E91E63" },
    { label: "Grey", value: "#95A5A6" },
    { label: "Dark Blue", value: "#2C3E50" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubforumData({
      ...subforumData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("authToken"); // Retrieve the authorization token

    try {
      const response = await createSubforum(subforumData, token);
      toast.success("Subforum created successfully!", { position: "top-center" });
      setSubforumData({ name: "", description: "", tagColor: "" }); // Reset form
      console.log("Subforum created:", response);
    } catch (error) {
      toast.error("Failed to create subforum. Please try again.", {
        position: "top-center",
      });
      console.error("Error creating subforum:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.createSubforumPage}>
      <h1>Create Subforum</h1>
      <form className={styles.subforumForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Subforum Name:
          <input
            type="text"
            name="name"
            value={subforumData.name}
            onChange={handleInputChange}
            required
            className={styles.inputField}
          />
        </label>
        <label className={styles.formLabel}>
          Description:
          <textarea
            name="description"
            value={subforumData.description}
            onChange={handleInputChange}
            required
            className={styles.textArea}
          />
        </label>
        <label className={styles.formLabel}>
          Color:
          <div className={styles.colorPicker}>
            {colorOptions.map((color) => (
              <div
                key={color.value}
                className={`${styles.colorOption} ${
                  subforumData.tagColor === color.value ? styles.selectedColor : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() =>
                  setSubforumData({ ...subforumData, tagColor: color.value })
                }
                title={color.label}
              ></div>
            ))}
          </div>
        </label>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Creating..." : "Create Subforum"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateSubforum;
