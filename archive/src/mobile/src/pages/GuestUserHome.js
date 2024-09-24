import React, {  useContext, useEffect, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Renamed import
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Renamed import
import { getFeed } from '../services/feed.js';
// Dummy data for posts


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
        console.log("here");
        setPosts(response.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to increment like count for a post
  const incrementLike = (postId) => {
    if (isGuestUser()) {
      displayGuestAlert();
      return;
    }
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to increment dislike count for a post
  const incrementDislike = (postId) => {
    if (isGuestUser()) {
      displayGuestAlert();
      return;
    }
    setDislikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to increment comment count for a post
  const incrementComment = (postId) => {
    if (isGuestUser()) {
      displayGuestAlert();
      return;
    }
    setCommentCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to toggle bookmark status for a post
  const toggleBookmark = (postId) => {
    if (isGuestUser()) {
      displayGuestAlert();
      return;
    }
    setBookmarkedPosts((prevBookmarks) => ({
      ...prevBookmarks,
      [postId]: !prevBookmarks[postId],
    }));
  };
  const flagPost = (postId) => {
    if (isGuestUser()) {
      displayGuestAlert();
      return;
    }
    setBookmarkedPosts((prevFlags) => ({
      ...prevFlags,
      [postId]: !prevFlags[postId],
    }));
  };
  // Function to check if the user is a guest user
  const isGuestUser = () => {
    // You can implement your logic to determine if the user is a guest user or not
    return true; // For example, returning true for demonstration purposes
  };

  // Function to display an alert for guest users
  const displayGuestAlert = () => {
    Alert.alert(
      'Guest User',
      'You cannot do this action, you are a guest user.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  const renderPost = ({ item }) => (
    <View style={{ marginBottom: 20, backgroundColor:  'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>{item.username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserP', { username: item.username })}>
          <Text style={{ color: 'blue' }}>View Profile</Text>
        </TouchableOpacity>
      </View>
      {item.media && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${item.media}` }}
          style={{ width: '100%', height: 300 }}
        />
      )}
      <Text style={{ marginVertical: 10 }}>{item.animalName || 'No Animal Name'}</Text>
      <Text style={{ marginVertical: 10 }}>{item.caption}</Text>
      <Text style={{ marginVertical: 10 }}>Posted on: {item.postDate}</Text>
      <Text style={{ marginVertical: 10 }}>Location: {item.location}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={() => incrementLike(item.id)}>
          <FontAwesomeIcon name="thumbs-up" size={30} color="green" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{likeCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => incrementDislike(item.id)}>
          <FontAwesomeIcon name="thumbs-down" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{dislikeCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => incrementComment(item.id)}>
          <FontAwesomeIcon name="comment" size={30} color="blue" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{commentCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
          <FontAwesomeIcon name={bookmarkedPosts[item.id] ? "bookmark" : "bookmark-o"} size={30} color="pink" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          
        </View>
      </View>
    </View>
  );


  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.postID.toString()}
      />
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <MaterialIcon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GuestS')}>
          <MaterialIcon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')}>
          <MaterialIcon name="person-add" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f0f0f0',
  },
  iconText: {
    marginLeft: 3,
  },
});

export default HomeScreen;
