import { View, Text, ScrollView } from "react-native";
import React from "react";
import SubForumResult from "../_components/result-cards/sub-forum-result";

export default function SubForumsView({ data }) {
  return (
    <ScrollView>
      {data.map((subForum, index) => (
        <SubForumResult key={index} subForum={subForum} />
      ))}
    </ScrollView>
  );
}
