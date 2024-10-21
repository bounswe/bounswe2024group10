import React from "react";
import { Pressable } from "react-native";
import paths from "../../config/screen-paths";
import { router } from "expo-router";

export default function AssetLink({
  children,
  target = paths.EXPLORE.ASSET_DETAIL,
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
