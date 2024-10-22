import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import paths from "../../config/screen-paths";

export default function UserLink({
  children,
  target = paths.EXPLORE.USER_PROFILE,
  user
}) {
  return (
    <Pressable
      onPress={() => {
        router.push(`${target}?username=${user?.username}`);
      }}
    >
      {children}
    </Pressable>
  );
}
