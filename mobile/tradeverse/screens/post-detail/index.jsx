import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icon library

const { width } = Dimensions.get('window'); // Get screen width

// Expanded mock comments to test scrolling
const mockComments = Array.from({ length: 20 }).map((_, index) => ({
  id: String(index + 1),
  name: User ${index + 1},
  username: @user${index + 1},
  text: 'This is a sample comment.',
  image: null,
}));

const post = {
  user: { name: 'Daron Acemoğlu', username: '@godofinvestment', image: null },
  forum: 'Stock Market Trends & Day Trading Discussions',
  title: 'How to pass into profitable area in stock marketing.',
  text:
    'Economic downturns can be challenging, but they also offer opportunities for strategic investments. 💡 In uncertain times, those who adapt and stay informed can turn risk into reward.',
  hashtags: ['#Stocks', '#Investing', '#MarketTrends'],
  stats: { views: 12300, comments: 132, likes: 132, dislikes: 132 },
};

const PostScreen = () => {
  const [likeStatus, setLikeStatus] = useState(null);

  const handlePress = (type) => {
    setLikeStatus((prev) => (prev === type ? null : type));
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentBlock}>
      <TouchableOpacity style={styles.userInfo}>
        <Image
          source={{ uri: item.image || 'https://via.placeholder.com/40' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={styles.handle}>{item.username}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={mockComments}
      renderItem={renderComment}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.postBlock}>
          <View style={styles.postHeader}>
            <TouchableOpacity style={styles.userInfo}>
              <Image
                source={{ uri: post.user.image || 'https://via.placeholder.com/40' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.username}>{post.user.name}</Text>
                <Text style={styles.handle}>{post.user.username}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forum}>
                {post.forum.length > 20 ? ${post.forum.slice(0, 20)}... : post.forum}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.postContent}>
            <Text style={styles.title}>{post.title}</Text>
            {post.image && <Image source={{ uri: post.image }} style={styles.postImage} />}
            <Text style={styles.postText}>{post.text}</Text>
            <View style={styles.hashtags}>
              {post.hashtags.map((tag, index) => (
                <Text key={index} style={styles.hashtag}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.postFooter}>
            <View style={styles.stat}>
              <Ionicons name="eye" size={20} color="purple" />
              <Text>{post.stats.views}</Text>
            </View>
            <TouchableOpacity style={styles.stat}>
              <Ionicons name="chatbubble-outline" size={20} color="purple" />
              <Text>{post.stats.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('like')} style={styles.stat}>
              <Ionicons
                name={likeStatus === 'like' ? 'thumbs-up' : 'thumbs-up-outline'}
                size={20}
                color="purple"
              />
              <Text>{post.stats.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('dislike')} style={styles.stat}>
              <Ionicons
                name={likeStatus === 'dislike' ? 'thumbs-down' : 'thumbs-down-outline'}
                size={20}
                color="purple"
              />
              <Text>{post.stats.dislikes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  postBlock: { padding: 15, backgroundColor: '#f3e5f5', marginBottom: 10 },
  postHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: 'bold', fontSize: 16 },
  handle: { color: 'gray' },
  forum: { color: 'purple', fontSize: 14, marginLeft: 10 },
  postContent: { marginTop: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  postImage: { width: width - 30, height: 200, marginVertical: 10 },
  postText: { fontSize: 16, marginBottom: 5 },
  hashtags: { flexDirection: 'row', flexWrap: 'wrap' },
  hashtag: { color: 'purple', marginRight: 10 },
  postFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  stat: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
  commentBlock: { marginBottom: 10, paddingHorizontal: 15 },
  commentText: { marginLeft: 50, fontSize: 16 },
});

export default PostScreen;
 243 changes: 243 additions & 0 deletions243
mobile/tradeverse/screens/subforum-details/index.jsx
Viewed
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,243 @@
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalScreen from "../../components/ui/global-screen"
import FullScrollView from "../../components/ui/full-scroll-view"
// Mock data for posts
const postData = [
  {
    id: 1,
    profilePhoto: 'https://example.com/profile1.png', // Replace with actual photo URLs
    name: 'Daron Acemoğlu',
    username: '@godofinvestment',
    postTitle: 'How to pass into profitable area in stock marketing',
    views: 12300,
    comments: 132,
    likes: 132,
    dislikes: 132,
  },
  {
    id: 2,
    profilePhoto: 'https://example.com/profile2.png',
    name: 'John Doe',
    username: '@stockExpert',
    postTitle: 'The future of investing in uncertain markets',
    views: 5000,
    comments: 90,
    likes: 200,
    dislikes: 10,
  },
  {
      id: 3,
      profilePhoto: 'https://example.com/profile1.png', // Replace with actual photo URLs
      name: 'Daron Acemoğlu',
      username: '@godofinvestment',
      postTitle: 'How to pass into profitable area in stock marketing',
      views: 12300,
      comments: 132,
      likes: 132,
      dislikes: 132,
    },
    {
      id: 4,
      profilePhoto: 'https://example.com/profile2.png',
      name: 'John Doe',
      username: '@stockExpert',
      postTitle: 'The future of investing in uncertain markets',
      views: 5000,
      comments: 90,
      likes: 200,
      dislikes: 10,
    },
    {
        id: 5,
        profilePhoto: 'https://example.com/profile1.png', // Replace with actual photo URLs
        name: 'Daron Acemoğlu',
        username: '@godofinvestment',
        postTitle: 'How to pass into profitable area in stock marketing',
        views: 12300,
        comments: 132,
        likes: 132,
        dislikes: 132,
      },
      {
        id: 6,
        profilePhoto: 'https://example.com/profile2.png',
        name: 'John Doe',
        username: '@stockExpert',
        postTitle: 'The future of investing in uncertain markets',
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
        <Image source={{ uri: post.profilePhoto }} style={styles.profilePhoto} />
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
            style={[styles.actionButton, disliked ? styles.dislikedButton : null]}
            onPress={toggleDislike}
          >
            <Text>❌ {disliked ? post.dislikes + 1 : post.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
    </GlobalScreen>
      </FullScrollView>
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
    backgroundColor: '#EDE7F6', // Light purple background
    padding: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C', // Dark purple
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  postContainer: {
    backgroundColor: '#F3E5F5', // Lightest purple
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
    color: '#4A148C',
  },
  userHandle: {
    fontSize: 14,
    color: '#7B1FA2',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewCount: {
    fontSize: 14,
    color: '#7B1FA2',
  },
  interactionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 15,
    fontSize: 14,
    color: '#7B1FA2',
  },
  likedButton: {
    color: '#E91E63', // Red for liked
  },
  dislikedButton: {
    color: '#D32F2F', // Dark red for disliked
  },
});

export default SubforumScreen;