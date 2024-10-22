import React from "react";
import { Pressable } from "react-native";
import paths from "../../config/screen-paths";
import { router } from "expo-router";

export default function AssetLink({
  children,
  target = paths.EXPLORE.ASSET_DETAIL,
  asset,
}) {
  return (
    <Pressable
      onPress={() => {
        router.push(`${target}?assetId=${asset?.id}`);
      }}
    >
      {children}
    </Pressable>
  );
}
