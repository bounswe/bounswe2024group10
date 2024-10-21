// Import necessary components and libraries
import React from 'react';
import {
  View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView
} from 'react-native';
import GlobalScreen from "../../components/ui/global-screen"
import FullScrollView from "../../components/ui/full-scroll-view"

// Mock data: 14 users with username, followers, and profile picture
const mockUsers = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  followers: Math.floor(Math.random() * 500),
  profilePic: 'https://via.placeholder.com/50', // Placeholder image for avatar
}));

// Main screen component
const FollowedUsersScreen = () => {

  // Render individual user blocks
  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userBlock}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.followers}>{item.followers} followers</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <GlobalScreen>
    <FullScrollView>
      <View style={styles.topBlock}>
        <Text style={styles.title}>Followed Users: {mockUsers.length}</Text>
        <FlatList
          data={mockUsers}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      </FullScrollView>
      </GlobalScreen>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e4ff', // Light purple background
  },
  topBlock: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20, // Adds space to prevent title from colliding with the notification bar
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 10,
    textAlign: 'center', // Center aligns the title
  },
  userBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0ccff',
    marginVertical: 5,
    borderRadius: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes the avatar circular
    marginRight: 15,
    backgroundColor: '#d3d3d3', // Adds a background color to indicate where the profile picture is
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4b0082',
  },
  followers: {
    fontSize: 14,
    color: '#6a0dad',
  },
});

export default FollowedUsersScreen;
