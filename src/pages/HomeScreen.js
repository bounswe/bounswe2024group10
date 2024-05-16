import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Dummy data for posts
const posts = [
  { id: 1, username: 'user1', imageUrl: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg' },
  { id: 2, username: 'user2', imageUrl: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg' },
  { id: 3, username: 'user3', imageUrl: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg' },
];

function HomeScreen({ navigation }) {
  // State variables for like, dislike, comment counts, and flag status
  const [likeCounts, setLikeCounts] = useState({});
  const [dislikeCounts, setDislikeCounts] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [flaggedPosts, setFlaggedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [postColors, setPostColors] = useState({});

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


  // Function to handle flagging a post
  const flagPost = (postId) => {
    setFlaggedPosts((prevFlags) => {
      const isFlagged = prevFlags[postId];
      const updatedFlags = { ...prevFlags, [postId]: !isFlagged };
      const backgroundColor = isFlagged ? 'white' : 'lightgreen';
      setPostColors((prevColors) => ({
        ...prevColors,
        [postId]: backgroundColor,
      }));
      return updatedFlags;
    });
  };

  const renderPost = ({ item }) => (
    <View style={{ marginBottom: 20, backgroundColor: postColors[item.id] || 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>{item.username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserP', { username: item.username })}>
          <Text style={{ color: 'blue' }}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: 300 }} />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={() => incrementLike(item.id)}>
          <Icon name="thumbs-up" size={30} color="green" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{likeCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => incrementDislike(item.id)}>
          <Icon name="thumbs-down" size={30} color="red" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{dislikeCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => console.log("comment pressed")}>
          <Icon name="comment" size={30} color="blue" />
        </TouchableOpacity>
        <Text style={styles.iconText}>{commentCounts[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
          <Icon name={bookmarkedPosts[item.id] ? "bookmark" : "bookmark-o"} size={30} color="pink" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => flagPost(item.id)}>
            <Icon name="flag" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
      />
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <Icon name="plus" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Icon name="user" size={30} color="green" />
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
  iconContainer: {
    marginLeft: 10,
  },
});

export default HomeScreen;