import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE_CONSTANT } from "../../constants/theme";
import GlobalScreen from "../../components/ui/global-screen";
import Tabs from "./_components/tabs";
import PaddedContainer from "../../components/ui/padded-container";
import PopularView from "./views/popular-view";
import ExploreData from "../../mock/explore";
import { Stack, useLocalSearchParams } from "expo-router";
import SearchBar from "./_components/search-bar";
import { IconAdjustments } from "@tabler/icons-react-native";

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState("popular");

  const { searchKey } = useLocalSearchParams();

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "12 Results",
          headerBackTitleVisible: false,
        }}
      />
      <PaddedContainer
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: SIZE_CONSTANT * 1,
        }}
      >
        <SearchBar value={searchKey} />
        <Pressable
          style={{
            backgroundColor: COLORS.primary50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZE_CONSTANT * 1,
            height:SIZE_CONSTANT * 3.8,
            width:SIZE_CONSTANT * 3.8
          }}
        >
          <IconAdjustments color={COLORS.primary500} />
        </Pressable>
      </PaddedContainer>
      {/* <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "popular" && (
        <PopularView data={ExploreData.PopularData} />
      )}
      {selectedTab === "recent" && (
        <PopularView data={ExploreData.RecentData} />
      )} */}
    </GlobalScreen>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: SIZE_CONSTANT * 5,
  },
  sectionTitle: {
    fontSize: SIZE_CONSTANT * 1,
    color: COLORS.graytext,
  },
});
