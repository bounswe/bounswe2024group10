import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import { useLocalSearchParams } from "expo-router";
import { getSubForumById } from "../../mock-services/subforums";
import PostCard from "../home-root/_components/post-card";
import { COLORS, SIZE_CONSTANT } from "../../constants/theme";

const SubforumScreen = () => {
  const [data, setData] = useState(null);

  const { subforumId } = useLocalSearchParams();

  useEffect(() => {
    const res = getSubForumById(subforumId);
    setData(res);
  }, [subforumId]);

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      {data && (
        <View style={styles.container}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{data?.title}

              
            </Text>
            <Text>
            {`✍️ ${data?.posts?.length}`}
            </Text>

          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {data?.posts.map((post) => (
              <PostCard key={post.id} post={{...post,subforum:data}} />
            ))}
          </ScrollView>
        </View>
      )}
    </GlobalScreen>
  );
};

// Styles
const styles = StyleSheet.create({

  titleBlock: {
    marginLeft: SIZE_CONSTANT * 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:COLORS.primary950,
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
