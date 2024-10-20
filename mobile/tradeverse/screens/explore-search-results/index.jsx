import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE_CONSTANT } from "../../constants/theme";
import GlobalScreen from "../../components/ui/global-screen";
import Tabs from "./_components/tabs";
import PaddedContainer from "../../components/ui/padded-container";
import PopularView from "./views/popular-view";
import { Stack, useLocalSearchParams } from "expo-router";
import SearchBar from "./_components/search-bar";
import { IconAdjustments } from "@tabler/icons-react-native";
import SearchData from "../../mock/explore-search-results";
import SubForumsView from "./views/subforums-view";
import TagsView from "./views/tags-view";
import PostsView from "./views/posts-view";
import UsersView from "./views/users-view";

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState("assets");

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
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "popular" && (
          <PopularView data={SearchData.PopularData} />
        )}

        {selectedTab === "assets" && (<></>)}
        {selectedTab === "tags" && (<TagsView data={SearchData.TagsData} />)}
        {selectedTab === "sub_forums" && (<SubForumsView data={SearchData.SubForumsData} />)}
        {selectedTab === "posts" && (<PostsView data={SearchData.PopularData} />)}
        {selectedTab === "people" && (<UsersView data={SearchData.UsersData} />)}

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
