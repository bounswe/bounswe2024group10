import React from "react";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default function ProfileOption({
  icon = () => null,
  text,
  action,
  route,
  disabled = false,
  isLastOption = false,
}) {
  const router = useRouter();

  const handlePress = () => {
    if (action) action();
    else router.push(route);
  };

  return (
    <TouchableOpacity
      style={{
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
      }}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View>{icon}</View>
        </View>
        <View
          style={[
            styles.rightContainer,
            {
              borderBottomWidth: isLastOption ? 0 : 1,
            },
          ]}
        >
          <Text style={styles.optionText}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SIZES.xxSmall,
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexBasis: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingVertical: SIZES.medium,
  },
  optionText: {
    fontSize: SIZES.small,
    color: "#000",
  },
});
