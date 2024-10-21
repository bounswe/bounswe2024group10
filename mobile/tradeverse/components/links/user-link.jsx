import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import paths from "../../config/screen-paths";

export default function UserLink({
  children,
  target = paths.EXPLORE.USER_PROFILE,
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
