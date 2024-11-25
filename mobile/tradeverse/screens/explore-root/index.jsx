import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import SearchBar from './_components/search-bar'
import GlobalScreen from '../../components/ui/global-screen'
import Tabs from './_components/tabs'
import PaddedContainer from '../../components/ui/padded-container'
import PopularView from './views/popular-view'
import { getExploreFeed } from '../../mock-services/explore'

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState('popular')
  const [data, setData] = useState({
    popularPosts: [],
    recentPosts: [],
  })
  useEffect(() => {
    const result = getExploreFeed()
    setData({
      popularPosts: result.popular,
      recentPosts: result.recent,
    })
  }, [])
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
      {data && (
        <>
          {selectedTab === 'popular' && (
            <PopularView data={data.popularPosts} />
          )}
          {selectedTab === 'recent' && <PopularView data={data.recentPosts} />}
        </>
      )}
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: SIZE_CONSTANT * 5,
  },
  sectionTitle: {
    fontSize: SIZE_CONSTANT * 1,
    color: COLORS.graytext,
  },
})
