import { COLORS } from "@/constants/theme";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function AuthLoader() {
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        display: "flex",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingBottom: 64,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: COLORS.blackContent,
          fontWeight: "bold",

          transform: [{ translateY: -24 }],
        }}
      >
        Tradeverse
      </Text>
      <ActivityIndicator size="large" color={COLORS.primary500} />
    </View>
  );
}
