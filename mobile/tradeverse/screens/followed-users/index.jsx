// Import necessary components and libraries
import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { Stack } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import ProfileImage from '../../components/images/profile-image'
import UserCard from './_components/UserCard'

// Mock data: 14 users with username, followers, and profile picture
const mockUsers = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  username: `user_${i + 1}`,
  name: `Name ${i + 1}`,
  surname: `Surname ${i + 1}`,
  followers: Math.floor(Math.random() * 500),
  profilePic: 'https://via.placeholder.com/50', // Placeholder image for avatar
}))

// Main screen component
const FollowedUsersScreen = () => (
  <GlobalScreen>
    <Stack.Screen
      options={{
        headerBackTitleVisible: false,
        headerTitle: `Followed Users (${mockUsers.length})`,
      }}
    />
    <FullScrollView>
      <View style={styles.topBlock}>
        {mockUsers.map((item) => (
          <TouchableOpacity key={item.id}>
            <UserCard user={item} />
          </TouchableOpacity>
        ))}
      </View>
    </FullScrollView>
  </GlobalScreen>
)

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBlock: {
    flex: 1,
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
})

export default FollowedUsersScreen
