import React, { useEffect, useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import GlobalScreen from '../../components/ui/global-screen'
import Tabs from './_components/tabs'
import PaddedContainer from '../../components/ui/padded-container'
import PopularView from './views/popular-view'
import { Stack, useLocalSearchParams } from 'expo-router'
import SearchBar from './_components/search-bar'
import { IconAdjustments } from '@tabler/icons-react-native'
import SubForumsView from './views/subforums-view'
import TagsView from './views/tags-view'
import PostsView from './views/posts-view'
import UsersView from './views/users-view'
import AssetsView from './views/asset-view'
import { searchOnExplore } from '../../mock-services/explore'
import { search } from '../../services/explore'
import { useContext } from 'react'
import AuthContext from '../../auth/context/auth-context'

export default function ExploreRootScreen() {
  const [selectedTab, setSelectedTab] = useState('popular')
  const { user } = useContext(AuthContext)

  const [updatedSearchKey, setUpdatedSearchKey] = useState('')

  const [data, setData] = useState({
    popular: [],
    assets: [],
    tags: [],
    sub_forums: [],
    posts: [],
    people: [],
  })

  const { searchKey } = useLocalSearchParams()

  useEffect(() => {
    setUpdatedSearchKey(searchKey)
  }, [searchKey])

  useEffect(() => {
    const fetchData = async () => {
      const data = await search({
        keyword: updatedSearchKey,
        username: user?.username ?? '',
      })
      console.log(data)

      console.log('fetching data')

      setData({
        popular: data.popular,
        assets: data.assets,
        tags: data.tags,
        sub_forums: data.subforums,
        posts: data.posts,
        people: data.users,
      })
    }
    fetchData()
  }, [searchKey, updatedSearchKey])

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
      {data && (
        <>
          {selectedTab === 'popular' && data.popular && (
            <PopularView data={data.popular} />
          )}
          {selectedTab === 'assets' && data.assets && (
            <AssetsView data={data.assets} />
          )}
          {selectedTab === 'tags' && data.tags && <TagsView data={data.tags} />}
          {selectedTab === 'sub_forums' && data.tags && (
            <SubForumsView data={data.sub_forums} />
          )}
          {selectedTab === 'posts' && data.posts && (
            <PostsView data={data.posts} />
          )}
          {selectedTab === 'people' && data.people && (
            <UsersView data={data.people} />
          )}
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
