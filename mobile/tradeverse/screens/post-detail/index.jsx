import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icon library
import { useLocalSearchParams } from "expo-router";
import { getPostById } from "../../mock-services/post";
import PostCard from "../home-root/_components/post-card";
import PostHeader from "./_components/post-header";
import GlobalScreen from "../../components/ui/global-screen";

const { width } = Dimensions.get("window"); // Get screen width

// Expanded mock comments to test scrolling
const mockComments = Array.from({ length: 20 }).map((_, index) => ({
  id: String(index + 1),
  name: `User ${index + 1}`,
  username: `@user${index + 1}`,
  text: "This is a sample comment.",
  image: null,
}));

const post = {
  user: { name: "Daron Acemoğlu", username: "@godofinvestment", image: null },
  forum: "Stock Market Trends & Day Trading Discussions",
  title: "How to pass into profitable area in stock marketing.",
  text: "Economic downturns can be challenging, but they also offer opportunities for strategic investments. 💡 In uncertain times, those who adapt and stay informed can turn risk into reward.",
  hashtags: ["#Stocks", "#Investing", "#MarketTrends"],
  stats: { views: 12300, comments: 132, likes: 132, dislikes: 132 },
};

const PostScreen = () => {
  const [likeStatus, setLikeStatus] = useState(null);

  const handlePress = (type) => {
    setLikeStatus((prev) => (prev === type ? null : type));
  };

  const { postId } = useLocalSearchParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('====================================');
    console.log('Post ID:', postId);
    console.log('====================================');
    const postDetail = getPostById(postId);
    setData(postDetail);
  }, [postId]);

  const renderComment = ({ item }) => (
    <View style={styles.commentBlock}>
      <TouchableOpacity style={styles.userInfo}>
        <Image
          source={{ uri: item.image || "https://via.placeholder.com/40" }}
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
  if (data) {
    return (
      <GlobalScreen containerStyle={{
        paddingHorizontal: 0,
      }}> 
        <FlatList
          data={mockComments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<PostHeader post={data} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </GlobalScreen>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  postBlock: { padding: 15, backgroundColor: "#f3e5f5", marginBottom: 10 },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontWeight: "bold", fontSize: 16 },
  handle: { color: "gray" },
  forum: { color: "purple", fontSize: 14, marginLeft: 10 },
  postContent: { marginTop: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  postImage: { width: width - 30, height: 200, marginVertical: 10 },
  postText: { fontSize: 16, marginBottom: 5 },
  hashtags: { flexDirection: "row", flexWrap: "wrap" },
  hashtag: { color: "purple", marginRight: 10 },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  stat: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  commentBlock: { marginBottom: 10, paddingHorizontal: 15 },
  commentText: { marginLeft: 50, fontSize: 16 },
});

export default PostScreen;
