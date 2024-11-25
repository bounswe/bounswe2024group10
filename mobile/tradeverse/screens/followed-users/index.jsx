// Import necessary components and libraries
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import FullScrollView from "../../components/ui/full-scroll-view";
import ProfileImage from "../../components/images/profile-image";
import UserCard from "./_components/UserCard";
import { Stack } from "expo-router";
import { getFollowings } from "../../services/follow";
// // Mock data: 14 users with username, followers, and profile picture
// const mockUsers = Array.from({ length: 14 }, (_, i) => ({
//   id: i + 1,
//   username: `user_${i + 1}`,
//   name: `Name ${i + 1}`,
//   surname: `Surname ${i + 1}`,
//   followers: Math.floor(Math.random() * 500),
//   profilePic: "https://via.placeholder.com/50", // Placeholder image for avatar
// }));

// Main screen component
const FollowedUsersScreen = () => {

  const [followings, setFollowings] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUser = () => {
      const user = Storage.getItem('username')
      if (username && username.length > 0) {
        setUsername(user);
      }
    }

    getUser();

  }, [])

  useEffect(() => {
    const getFollowingsByUsername = async () => {
      const res = getFollowings({ username });
      if (res && res.length > 0) {
        setFollowings(res)
      }
    }

    getFollowingsByUsername();
  }, [username])

  return (
    <GlobalScreen>
      <Stack.Screen options={{
        headerBackTitleVisible: false,
        headerTitle: `Followed Users (${res.length})`,
      }} />
      <FullScrollView>
        <View style={styles.topBlock}>
          {res.map((item, index) => (
            <TouchableOpacity key={index}>
              <UserCard user={item} />
            </TouchableOpacity>
          ))}
        </View>
      </FullScrollView>
    </GlobalScreen>
  );
};

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBlock: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6a0dad",
    marginBottom: 10,
    textAlign: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: "#d3d3d3",
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4b0082",
  },
  followers: {
    fontSize: 14,
    color: "#6a0dad",
  },
});

export default FollowedUsersScreen;
