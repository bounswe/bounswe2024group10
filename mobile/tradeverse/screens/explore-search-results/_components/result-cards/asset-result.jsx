import { Text, View } from "react-native";
import React from "react";
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from "../../../../constants/theme";
import ContentImage from "../../../../components/images/content-image";

export default function AssetResult({ style, asset }) {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.small,
        paddingTop: SIZE_CONSTANT * 1.2,
        paddingBottom: SIZE_CONSTANT * 1.4,
        borderBottomWidth: 0.5,
        borderBottomColor: "#E5E5E5",
        display: "flex",
        flexDirection: "row",
        gap: SIZE_CONSTANT * 1.2,
        alignItems: "center",
      }}
    >
      <ContentImage
        src={asset.image}
        style={{
          height: SIZE_CONSTANT * 2.4,
          width: SIZE_CONSTANT * 2.4,
          borderRadius: SIZE_CONSTANT * 1.2,
          borderWidth: 0.5,
          borderColor: "#E5E5E5",
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            fontWeight: FONT_WEIGHTS.semibold,
          }}
        >
          {asset.abbreviation}
        </Text>
        <Text
          style={{
            color: COLORS.graytext,
            fontSize: SIZES.xxSmall,
          }}
        >
          {asset.label}
        </Text>
      </View>
    </View>
  );
}