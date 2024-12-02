import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getFeed } from "../services/feed.js";

function HomeScreen({ navigation }) {
  // State variables for like, dislike, comment counts, and flag status
  const [likeCounts, setLikeCounts] = useState({});
  const [dislikeCounts, setDislikeCounts] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getFeed();
        if (!response.success) {
          throw new Error(response.message);
        }
        setPosts(response.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to increment like count for a post
  const incrementLike = (postId) => {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to increment dislike count for a post
  const incrementDislike = (postId) => {
    setDislikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to increment comment count for a post
  const incrementComment = (postId) => {
    setCommentCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to toggle bookmark status for a post
  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prevBookmarks) => ({
      ...prevBookmarks,
      [postId]: !prevBookmarks[postId],
    }));
  };

  const renderPost = ({ item }) => (
    <View style={{ marginBottom: 20, backgroundColor: "white" }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Text style={{ fontWeight: "bold", marginRight: 10 }}>
          {item.username}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UserP", { username: item.username })
          }
        >
          <Text style={{ color: "blue" }}>View Profile</Text>
        </TouchableOpacity>
      </View>
      {item.media && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${item.media}` }}
          style={{ width: "100%", height: 300 }}
        />
      )}
      <Text style={{ marginVertical: 10 }}>
        {item.animalName || "No Animal Name"}
      </Text>
      <Text style={{ marginVertical: 10 }}>{item.caption}</Text>
      <Text style={{ marginVertical: 10 }}>Posted on: {item.postDate}</Text>
      <Text style={{ marginVertical: 10 }}>Location: {item.location}</Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <TouchableOpacity onPress={() => incrementLike(item.postID)}>
          <Icon name="thumbs-up" size={30} color="green" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{likeCounts[item.postID] || 0}</Text>
        <TouchableOpacity onPress={() => incrementDislike(item.postID)}>
          <Icon name="thumbs-down" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{dislikeCounts[item.postID] || 0}</Text>
        <TouchableOpacity onPress={() => console.log("comment pressed")}>
          <Icon name="comment" size={30} color="blue" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{commentCounts[item.postID] || 0}</Text>
        <TouchableOpacity onPress={() => toggleBookmark(item.postID)}>
          <Icon
            name={bookmarkedPosts[item.postID] ? "bookmark" : "bookmark-o"}
            size={30}
            color="pink"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.postID.toString()} // Use postID instead of id
      />
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
          <Icon name="plus" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
          <Icon name="user" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "#f0f0f0",
  },
  iconText: {
    marginLeft: 3,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default HomeScreen;
