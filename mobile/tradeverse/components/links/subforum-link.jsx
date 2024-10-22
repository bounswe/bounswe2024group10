import React from "react";
import { Pressable } from "react-native";
import paths from "../../config/screen-paths";
import { router } from "expo-router";

export default function SubforumLink({
  children,
  target = paths.EXPLORE.SUBFORUM_DETAIL,
  subForum,
}) {
  return (
    <Pressable
      onPress={() => {
        router.push(`${target}?subforumId=${subForum?.id}`);
      }}
    >
      {children}
    </Pressable>
  );
}
