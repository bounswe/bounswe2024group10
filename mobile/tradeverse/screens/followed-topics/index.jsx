// import React from 'react';
// import { Text } from 'react-native';
// import CreateRootScreen from '../../../screens/create-root';
// import WelcomingScreen from '../../../screens/welcoming';

// export default function Create() {
//   return (
//       // <CreateRootScreen/>

//   );
// }

import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import SkeletonBox from '../../components/ui/skeleton'
import AuthContext from '../../auth/context/auth-context'
import { getFollowedSubforums } from '../../services/subforum'
import MainButton from '../../components/buttons/main-button'
import SubForumCard from './_components/SubforumCard'

const FollowedTagsScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useContext(AuthContext)
  const router = useRouter()

  const renderSkeleton = (
    <View style={[styles.container, { marginTop: 44 }]}>
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonBox height={72} width="100%" key={index} />
      ))}
    </View>
  )

  const renderData = (followedTags) =>
    followedTags.length ? (
      <View style={styles.container}>
        <Text style={styles.header}>
          You are following {followedTags.length} topics
        </Text>
        {followedTags.map((item, index) => (
          <SubForumCard key={item.id} subForum={item} />
        ))}
      </View>
    ) : (
      <>
        <Text style={styles.header}>No Subforums Followed</Text>
        <MainButton
          style={{ marginTop: 20 }}
          text="Explore Subforums"
          onPress={() => router.replace('/subforums')}
        />
      </>
    )

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await getFollowedSubforums({ username: user.username })
        if (res) {
          setData(res.followings)
          setLoading(false)
        } else {
          setError('Failed to fetch data')
        }
      } catch (err) {
        setError(err)
        console.log('Failed to fetch data', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Followed Subforums',
          }}
        />
        <>{loading ? renderSkeleton : renderData(data)}</>
      </FullScrollView>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tagList: {
    paddingBottom: 60, // Extra padding for the bottom nav bar
  },
  tagBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2, // Adds shadow effect
    alignItems: 'center',
    borderWidth: 1, // Add a border around the box
    borderColor: '#EAEAEA', // Border color
  },
  tagName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tagFollowers: {
    fontSize: 14,
    color: '#777',
  },
  bottomNav: {
    position: 'absolute', // Position at the bottom of the screen
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4B49F5', // Main background color of the nav bar
    height: 60, // Height of the navigation bar
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA', // Adds a border on top of the nav bar for separation
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rounded button
    backgroundColor: '#624BF6', // Different color for the active button
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FollowedTagsScreen
