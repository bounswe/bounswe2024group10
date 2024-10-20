import { View, Text, ScrollView } from "react-native";
import React from "react";
import PostCard from "../_components/post-result";

export default function RecentView({ data }) {
  return (
    <ScrollView>
      {data.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ScrollView>
  );
}
