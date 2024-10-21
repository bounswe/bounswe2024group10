import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZE_CONSTANT, SIZES,FONT_WEIGHTS } from "../../../../constants/theme";
import formatInteractionNumber from "../../../../util/format-number";
import SubforumLink from "../../../../components/links/subforum-link";
import paths from "../../../../config/screen-paths";

export default function SubForumResult({ style, subForum }) {
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
    <SubforumLink target={paths.EXPLORE.SEARCH_RESULTS.SUBFORUM_DETAIL}>

    
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
          color: COLORS.primary950,
          letterSpacing: -0.03,
          fontWeight: FONT_WEIGHTS.medium,
          marginBottom: SIZE_CONSTANT * 0.8,
        }}
      >
        {subForum.title}
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
          value={subForum.posts}
        />
        <InteractionInfo
          icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>⭐</Text>}
          value={subForum.followers}
        />
        <InteractionInfo
          icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>👤</Text>}
          value={subForum.people}
        />
      </View>
    </View>
    </SubforumLink>
  );
}
