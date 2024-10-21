import React from "react";
import { Pressable } from "react-native";
import paths from "../../config/screen-paths";
import { router } from "expo-router";

export default function PostLink({
  children,
  target = paths.EXPLORE.POST_DETAIL,
}) {
  return (
    <Pressable
      onPress={() => {
        router.push(target);
      }}
    >
      {children}
    </Pressable>
  );
}
