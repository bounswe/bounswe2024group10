import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import GlobalScreen from '../../components/ui/global-screen'
import Tabs from './_components/tabs'
import PaddedContainer from '../../components/ui/padded-container'
import SearchBar from './_components/search-bar'
import PostsView from './views/posts-view'
import AssetsView from './views/asset-view'
import TagsView from './views/tags-view'
import SubForumsView from './views/subforums-view'
import { IconAdjustments } from '@tabler/icons-react-native'
import UsersView from './views/users-view'

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState('posts')

  const { searchKey } = useLocalSearchParams()

  const [updatedSearchKey, setUpdatedSearchKey] = useState(searchKey)

  useEffect(() => {
    console.log('====================================')
    console.log(searchKey)
    console.log('====================================')
  }, [searchKey])

  useEffect(() => {
    setUpdatedSearchKey(searchKey)
  }, [searchKey])

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: '12 Results',
          headerBackTitleVisible: false,
        }}
      />
      <PaddedContainer
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: SIZE_CONSTANT * 1,
        }}
      >
        <SearchBar
          onChange={(val) => {
            setUpdatedSearchKey(val)
          }}
          value={searchKey}
        />
        <Pressable
          style={{
            backgroundColor: COLORS.primary50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZE_CONSTANT * 1,
            height: SIZE_CONSTANT * 3.8,
            width: SIZE_CONSTANT * 3.8,
          }}
        >
          <IconAdjustments color={COLORS.primary500} />
        </Pressable>
      </PaddedContainer>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <>
        {selectedTab === 'posts' && (
          <PostsView key={'posts'} keyword={updatedSearchKey} />
        )}
        {selectedTab === 'assets' && <AssetsView keyword={updatedSearchKey} />}
        {selectedTab === 'tags' && <TagsView keyword={updatedSearchKey} />}
        {selectedTab === 'sub_forums' && (
          <SubForumsView keyword={updatedSearchKey} />
        )}
        {selectedTab === 'people' && <UsersView keyword={updatedSearchKey} />}
      </>
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
