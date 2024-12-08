import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import { Stack, useLocalSearchParams } from 'expo-router'
import { getSubForumById } from '../../mock-services/subforums'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../constants/theme'
import {
  followSubforum,
  getSubforumById,
  unfollowSubforum,
} from '../../services/subforum'
import { useContext } from 'react'
import AuthContext from '../../auth/context/auth-context'
import PostCard from './_components/post-card'
import Skeleton from '../../components/ui/skeleton'
import PaddedContainer from '../../components/ui/padded-container'
import MainButton from '../../components/buttons/main-button'
const SubforumScreen = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const { subforumId, subforumTitle } = useLocalSearchParams()
  const { user } = useContext(AuthContext)

  const [followLoading, setFollowLoading] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [followerCount, setFollowerCount] = useState(0)

  const handleFollow = async () => {
    if (isFollowing) {
      setFollowLoading(true)
      const res = await unfollowSubforum({
        subforumId,
        username: user?.username,
      })
      if (res.successful) {
        setIsFollowing(false)
        setFollowLoading(false)
        setFollowerCount(followerCount - 1)
      }
    } else {
      setFollowLoading(true)
      const res = await followSubforum({
        subforumId,
        username: user?.username,
      })
      if (res.successful) {
        setFollowerCount(followerCount + 1)
        setIsFollowing(true)
        setFollowLoading(false)
      }
    }
  }

  useEffect(() => {
    if (data && data.isFollowedByGivenUsername) {
      setIsFollowing(true)
      setFollowerCount(data?.numberOfFollowers ?? 0)
    }
  }, [data])

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true)
      const res = await getSubforumById({
        id: subforumId,
        username: user?.username,
      })
      setData(res)
      setLoading(false)
    }
    fetchDetail()
  }, [subforumId])

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: subforumTitle,
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: COLORS.primary500,
          },
        }}
      />

      {loading && (
        <>
          <PaddedContainer
            style={{
              paddingHorizontal: SIZE_CONSTANT,
            }}
          >
            <Skeleton height={20} width={126} borderRadius={4} />
            <View style={{ marginTop: 5 }}>
              <Skeleton height={20} width={32} borderRadius={4} />
            </View>
          </PaddedContainer>
          <ScrollView style={{ marginTop: 20 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <View
                style={{
                  paddingHorizontal: SIZES.small,
                  paddingTop: SIZE_CONSTANT * 1.2,
                  paddingBottom: SIZE_CONSTANT * 1.4,
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#E5E5E5',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    flexDirection: 'row',
                  }}
                >
                  <Skeleton
                    height={SIZE_CONSTANT * 2.1}
                    width={SIZE_CONSTANT * 2.1}
                    borderRadius={SIZE_CONSTANT * 2.1}
                  />
                  <Skeleton height={14} width={64} borderRadius={10} />
                </View>
                <View style={{ marginTop: 8 }}>
                  <Skeleton height={14} width={96} borderRadius={10} />
                </View>
                <View style={{ marginTop: 8, display: 'flex', gap: 6 }}>
                  <Skeleton height={14} width="100%" borderRadius={10} />
                  <Skeleton height={14} width="100%" borderRadius={10} />
                  <Skeleton height={14} width="80%" borderRadius={10} />
                </View>
                <View
                  style={{
                    marginTop: 32,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <Skeleton height={14} width={24} borderRadius={10} />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Skeleton height={14} width={24} borderRadius={10} />
                    <Skeleton height={14} width={24} borderRadius={10} />
                    <Skeleton height={14} width={24} borderRadius={10} />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}

      {data && !loading && (
        <View style={styles.container}>
          {/* <View style={styles.titleBlock}> */}
          <PaddedContainer
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
              paddingHorizontal: 12,
            }}
          >
            <View>
              <Text style={styles.title}>{subforumTitle}</Text>
              <View
                style={{
                  marginTop: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <Text>{`✍️ ${data?.numberOfPosts}`}</Text>
                <Text>{`⭐️ ${followerCount}`}</Text>
              </View>
            </View>
            <View>
              <MainButton
                onPress={handleFollow}
                loading={followLoading}
                variant={isFollowing ? 'secondary' : 'primary'}
                style={{
                  borderRadius: 20,
                  paddingHorizontal: 24,
                  height: 40,
                }}
                text={isFollowing ? 'Following ✓' : 'Follow'}
              />
            </View>
          </PaddedContainer>
          {/* </View> */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {data?.posts.map((post) => (
              <PostCard
                key={post.id}
                post={{
                  ...post,
                  subforum: { ...data, id: subforumId, title: subforumTitle },
                  author: {
                    profilePhoto: post.creatorProfilePhoto,
                    username: post.creatorUsername,
                  },
                }}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </GlobalScreen>
  )
}

// Styles
const styles = StyleSheet.create({
  titleBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: SIZE_CONSTANT * 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary950,
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  postContainer: {
    backgroundColor: '#F3E5F5', // Lightest purple
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  userHandle: {
    fontSize: 14,
    color: '#7B1FA2',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewCount: {
    fontSize: 14,
    color: '#7B1FA2',
  },
  interactionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 15,
    fontSize: 14,
    color: '#7B1FA2',
  },
  likedButton: {
    color: '#E91E63', // Red for liked
  },
  dislikedButton: {
    color: '#D32F2F', // Dark red for disliked
  },
})

export default SubforumScreen
