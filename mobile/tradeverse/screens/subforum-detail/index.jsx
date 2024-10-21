import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import FullScrollView from "../../components/ui/full-scroll-view";
// Mock data for posts
const postData = [
  {
    id: 1,
    profilePhoto: "https://example.com/profile1.png", // Replace with actual photo URLs
    name: "Daron Acemoğlu",
    username: "@godofinvestment",
    postTitle: "How to pass into profitable area in stock marketing",
    views: 12300,
    comments: 132,
    likes: 132,
    dislikes: 132,
  },
  {
    id: 2,
    profilePhoto: "https://example.com/profile2.png",
    name: "John Doe",
    username: "@stockExpert",
    postTitle: "The future of investing in uncertain markets",
    views: 5000,
    comments: 90,
    likes: 200,
    dislikes: 10,
  },
  {
    id: 3,
    profilePhoto: "https://example.com/profile1.png", // Replace with actual photo URLs
    name: "Daron Acemoğlu",
    username: "@godofinvestment",
    postTitle: "How to pass into profitable area in stock marketing",
    views: 12300,
    comments: 132,
    likes: 132,
    dislikes: 132,
  },
  {
    id: 4,
    profilePhoto: "https://example.com/profile2.png",
    name: "John Doe",
    username: "@stockExpert",
    postTitle: "The future of investing in uncertain markets",
    views: 5000,
    comments: 90,
    likes: 200,
    dislikes: 10,
  },
  {
    id: 5,
    profilePhoto: "https://example.com/profile1.png", // Replace with actual photo URLs
    name: "Daron Acemoğlu",
    username: "@godofinvestment",
    postTitle: "How to pass into profitable area in stock marketing",
    views: 12300,
    comments: 132,
    likes: 132,
    dislikes: 132,
  },
  {
    id: 6,
    profilePhoto: "https://example.com/profile2.png",
    name: "John Doe",
    username: "@stockExpert",
    postTitle: "The future of investing in uncertain markets",
    views: 5000,
    comments: 90,
    likes: 200,
    dislikes: 10,
  },
  // Add more posts as necessary
];

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      setDisliked(false); // Un-dislike if liked
    }
  };

  const toggleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      setLiked(false); // Un-like if disliked
    }
  };

  return (
    <GlobalScreen>
      <FullScrollView>
        <TouchableOpacity style={styles.postContainer}>
          <TouchableOpacity style={styles.userInfo}>
            <Image
              source={{ uri: post.profilePhoto }}
              style={styles.profilePhoto}
            />
            <View>
              <Text style={styles.userName}>{post.name}</Text>
              <Text style={styles.userHandle}>{post.username}</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.postTitle}>{post.postTitle}</Text>

          <View style={styles.postActions}>
            <View style={styles.viewCount}>
              <Text>👁 {post.views.toLocaleString()}</Text>
            </View>
            <View style={styles.interactionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Text>💬 {post.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, liked ? styles.likedButton : null]}
                onPress={toggleLike}
              >
                <Text>❤ {liked ? post.likes + 1 : post.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.actionButton,
                  disliked ? styles.dislikedButton : null,
                ]}
                onPress={toggleDislike}
              >
                <Text>❌ {disliked ? post.dislikes + 1 : post.dislikes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </FullScrollView>
    </GlobalScreen>
  );
};

const SubforumScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Dollar Subforum</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {postData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7F6", // Light purple background
    padding: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A148C", // Dark purple
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  postContainer: {
    backgroundColor: "#F3E5F5", // Lightest purple
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A148C",
  },
  userHandle: {
    fontSize: 14,
    color: "#7B1FA2",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A148C",
    marginBottom: 10,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewCount: {
    fontSize: 14,
    color: "#7B1FA2",
  },
  interactionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginLeft: 15,
    fontSize: 14,
    color: "#7B1FA2",
  },
  likedButton: {
    color: "#E91E63", // Red for liked
  },
  dislikedButton: {
    color: "#D32F2F", // Dark red for disliked
  },
});

export default SubforumScreen;
