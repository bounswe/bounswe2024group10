import React, { useState, useEffect } from "react";
import PostHeader from "./postHeader";
import styles from "../styles/feed.module.css";
import { AuthData } from "../../auth/AuthWrapper";
import assets from "../../data/assets";
import ChartContainer from "./TradingViewWidget";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import defaultUserImage from "../../data/defaultUserImage.jpeg";
import { getUserDetails } from "../../services/user_api"; 

const Feed = ({ posts, refreshPosts}) => {

  const { user } = AuthData();
  const [postTitle, setPostTitle] = useState(""); // New state for title
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [subforums, setSubforums] = useState([]);
  const [selectedSubforum, setSelectedSubforum] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user.name) {
      getUserDetails(user.name)
        .then((details) => {
          setUserDetails(details);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [user.name]);

  useEffect(() => {
    fetch("http://35.246.188.121:8080/api/subforum/all") // New endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API directly returns an array of subforums
        if (Array.isArray(data)) {
          const formattedSubforums = data.map((subforum) => ({
            id: subforum.id,
            name: subforum.name, // Adjusted to the 'name' field
            description: subforum.description, // Including description if needed
            tagColor: subforum.tagColor, // Including tag color if needed
          }));
          setSubforums(formattedSubforums); // Take the first 5 subforums
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching subforums:", error));
  }, []);

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleAssetChange = (e) => {
    setSelectedAsset(e.target.value);
  };

  const handleSubforumChange = (e) => {
    setSelectedSubforum(e.target.value);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedSubforum) {
      toast.error("Please select a subforum before posting.");
      return;
    }
  
    // Function to parse content and extract tags and text
    const parseContent = (content) => {
      const parts = content.split(/(@\w+)/); // Split by '@' followed by a word
      const result = [];
  
      parts.forEach((part) => {
        if (part.startsWith("@")) {
          // Handle tags
          result.push({ type: "tag", value: part });
        } else if (part.trim() !== "") {
          // Handle regular text
          result.push({ type: "text", value: part.trim() });
        }
      });
  
      return result;
    };
  
    // Function to convert image to Base64
    const getBase64Image = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result;
          console.log("Base64 String:", base64String); // Debugging
          resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
      });
  
    // Parse the postContent into an array of text and tags
    const parsedContent = parseContent(postContent);
  
    // Initialize the content array with parsed content
    const contentArray = [...parsedContent];
  
    // Add Base64 image if selected
    if (selectedImage) {
      try {
        const base64Image = await getBase64Image(selectedImage);
        const sanitizedBase64 = base64Image.split(",")[1]; // Removes metadata
        contentArray.push({ type: "image", value: sanitizedBase64 });
      } catch (error) {
        toast.error("Error converting image to Base64.");
      }
    }
  
    // Add chart if an asset is selected
    if (selectedAsset) {
      contentArray.push({ type: "chart", value: selectedAsset });
    }
  
    const postPayload = {
      title: postTitle, // Use the new title input here
      subforumID: selectedSubforum,
      content: contentArray,
    };
  
  
    // Make the API call
    try {
      const token = localStorage.getItem("authToken"); 
      const response = await fetch("http://35.246.188.121:8080/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(postPayload),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        toast.success("Post created successfully!");  
        // Reset inputs after successful post
        refreshPosts();
        setPostTitle(""); // Clear the title input
        setPostContent("");
        setSelectedImage(null);
        setSelectedAsset("");
        setSelectedSubforum("");
      } else {
        toast.error(`Failed to create post: ${responseData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while creating the post.");
    }
  };
  
  console.log(" feed", user)
  

  return (
    <div className={styles.feed}>
      <ToastContainer />
      {user.isAuthenticated && (
        <div className={styles.postHeader}>
          <div className={styles.userAndTag}>
            <div className={styles.userDetailsContainer}>
            <img
                src={
                  userDetails?.profilePhoto
                    ? `http://35.246.188.121:8080/api${userDetails.profilePhoto}`
                    : defaultUserImage
                }
                className={styles.userImage}
                alt={`${userDetails?.username || "User"}'s Profile`}
              />
              <div className={styles.userDetails}>
                <h3>{`${user.name}`}</h3>
                <p>{`@${user.name}`}</p>
              </div>
            </div>
            <div className={styles.subforumContainer}>
              <select
                id="subforumDropdown"
                value={selectedSubforum}
                onChange={handleSubforumChange}
                className={styles.subforumDropdown}
              >
                <option value="">-- Select Subforum --</option>
                {subforums.map((subforum) => (
                  <option key={subforum.id} value={subforum.id}>
                    {subforum.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedImage && (
            <div className={styles.imagePreview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className={styles.previewImage}
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className={styles.removeImageButton}
              >
                Remove Image
              </button>
            </div>
          )}
          <form onSubmit={handlePostSubmit} className={styles.postInputForm}>
            {/* New input for the post title */}
            <input
              type="text"
              value={postTitle}
              onChange={handleTitleChange}
              placeholder="Post Title"
              className={styles.postTitleInput}
            />
            <textarea
              className={styles.postInput}
              value={postContent}
              onChange={handleInputChange}
              placeholder="What's on your mind?"
              rows="3"
            />
            <div className={styles.actionsContainer}>
              <label className={styles.addImageButton}>
                <span className={styles.buttonIcon}>📷</span>
                Add Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
              <div className={styles.addChartContainer}>
                <select
                  value={selectedAsset}
                  onChange={handleAssetChange}
                  className={styles.assetDropdown}
                >
                  <option value="">Select Asset</option>
                  {assets.assets.map((asset) => (
                    <option key={asset.symbol} value={asset.symbol}>
                      {asset.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {selectedAsset && (
              <div className={styles.tradingViewContainer}>
                <ChartContainer symbol={selectedAsset} />
              </div>
            )}
            <button type="submit" className={styles.postButton}>
              Post 🚀
            </button>
          </form>
        </div>
      )}

      <div className={styles.postHeaders}>
        {posts.map((post) => (
          <PostHeader key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
