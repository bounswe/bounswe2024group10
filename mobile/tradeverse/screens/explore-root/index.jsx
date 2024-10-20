import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE_CONSTANT } from "../../constants/theme";
import SearchBar from "./_components/search-bar";
import GlobalScreen from "../../components/ui/global-screen";
import Tabs from "./_components/tabs";
import PaddedContainer from "../../components/ui/padded-container";
import PopularView from "./views/popular-view";
import ExploreData from "../../mock/explore";

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState("popular"); 
  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <PaddedContainer>
        <SearchBar />
      </PaddedContainer>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "popular" && (<PopularView data={ExploreData.PopularData} />)}
      {selectedTab === "recent" && (<PopularView data={ExploreData.RecentData} />)}
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
