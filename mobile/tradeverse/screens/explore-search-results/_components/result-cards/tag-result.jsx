import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZE_CONSTANT, SIZES,FONT_WEIGHTS } from "../../../../constants/theme";
import formatInteractionNumber from "../../../../util/format-number";

export default function TagResult({ style, tag }) {
  const InteractionInfo = ({ icon, value }) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: SIZE_CONSTANT * 0.2,
          alignItems: "center",
          
        }}
      >
        <View>{icon()}</View>
        <Text
          style={{
            fontSize: SIZES.xxSmall,
            color: "#1D1B4B",
            letterSpacing: -0.03,
          }}
        >
          {formatInteractionNumber(value)}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: "#E5E5E5",
        paddingTop: SIZE_CONSTANT * 1.2,
        paddingBottom: SIZE_CONSTANT * 1.4,
        paddingHorizontal: SIZE_CONSTANT * 1.2,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary500,
          letterSpacing: -0.03,
          fontWeight: FONT_WEIGHTS.medium,
          marginBottom: SIZE_CONSTANT * 0.8,
        }}
      >
        @{tag.label}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: SIZE_CONSTANT * 2,
        }}
      >
        <InteractionInfo
          icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>✍️</Text>}
          value={tag.posts}
        />
        <InteractionInfo
          icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>👤</Text>}
          value={tag.people}
        />
      </View>
    </View>
  );
}
