import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import { COLORS, SIZE_CONSTANT } from "../../constants/theme";
import FullScrollView from "../../components/ui/full-scroll-view";
import ForYouView from "./views/for-you-view";
import HomeData from "../../mock/home";

export default function HomeRootScreen() {
  const [selectedTab, setSelectedTab] = useState('for_you') // for_you, followed_topics, followed_people
  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <FullScrollView>
        {selectedTab === 'for_you' && (<ForYouView data={HomeData.ForYouPosts} />)}
        {selectedTab === 'followed_topics' && (<></>)}
        {selectedTab === 'followed_people' && (<></>)}
      </FullScrollView>
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
