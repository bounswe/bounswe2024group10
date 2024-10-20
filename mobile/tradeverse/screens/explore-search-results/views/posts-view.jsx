import { View, Text, ScrollView } from "react-native";
import React from "react";
import PostCard from "../_components/result-cards/post-result";

export default function PostsView({ data }) {
  return (
    <ScrollView>
      {data.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ScrollView>
  );
}
