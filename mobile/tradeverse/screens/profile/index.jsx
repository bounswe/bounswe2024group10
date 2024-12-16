import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import { Stack, useLocalSearchParams } from 'expo-router'
import PostCard from '../../components/cards/post-card'
import PaddedContainer from '../../components/ui/padded-container'
import { followUser, getUserProfile, unfollowUser } from '../../services/user'

import formatInteractionNumber from '../../util/format-number'
import ProfileImage from '../../components/images/profile-image'
import { COLORS } from '../../constants/theme'
import MainButton from '../../components/buttons/main-button'
import { getImageSource } from '../../util/get-image-source'

const ProfileHeader = () => {
  const [activeTab, setActiveTab] = useState('popularPosts') // State for tab selection
  const [profile, setProfile] = useState({})
  const [postsData, setPostsData] = useState([])

  const { username } = useLocalSearchParams()

  const [followLoading, setFollowLoading] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [followerCount, setFollowerCount] = useState(0)

  const handleFollow = async () => {
    if (isFollowing) {
      setFollowLoading(true)
      const res = await unfollowUser({
        username: profile?.username,
      })
      if (res.successful) {
        setIsFollowing(false)
        setFollowLoading(false)
        setFollowerCount(followerCount - 1)
      }
    } else {
      setFollowLoading(true)
      const res = await followUser({
        username: profile?.username,
      })
      if (res.successful) {
        setFollowerCount(followerCount + 1)
        setIsFollowing(true)
        setFollowLoading(false)
      }
    }
  }

  useEffect(() => {
    if (profile && profile.following) {
      setIsFollowing(true)
      setFollowerCount(profile?.followerCount ?? 0)
    }
  }, [profile])

  useEffect(() => {
    const fetchUserData = async () => {
      const profileResult = await getUserProfile({ username }) // Ensure this fetches fresh data
      setProfile(profileResult)
    }

    fetchUserData()
  }, [username])

  useEffect(() => {
    if (profile) {
      setPostsData(profile[activeTab])
    }
  }, [profile, activeTab])

  if (!profile || !postsData) {
    return (
      <GlobalScreen>
        <View
          style={{
            marginTop: 24,
          }}
        >
          <ActivityIndicator size="small" color={COLORS.primary500} />
        </View>
      </GlobalScreen>
    )
  }

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Profile',
        }}
      />
      <View style={styles.container}>
        <PaddedContainer>
          <View style={styles.upperBar}>
            <View style={styles.profileInfo}>
              <ProfileImage
                style={styles.profileImage}
                src={getImageSource(profile.profilePhoto)}
              />
              <View style={styles.nameSection}>
                <Text style={styles.name}>
                  {profile.name} {profile.surname}
                </Text>
                <Text style={styles.username}>@{profile.username}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.threeDots}>
              <Text style={styles.dotsText}>⋮</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.middleBar}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {formatInteractionNumber(followerCount)}
              </Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {profile?.totalPosts ?? profile?.postCount}
              </Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <MainButton
              style={{
                width: 100,
                height: 40,
                borderRadius: 20,
              }}
              variant={isFollowing ? 'secondary' : 'primary'}
              text={isFollowing ? 'Following ✓' : 'Follow'}
              loading={followLoading}
              onPress={handleFollow}
            >
              <Text style={styles.followButtonText}>Follow</Text>
            </MainButton>
          </View>
        </PaddedContainer>
        <View style={styles.tabSection}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 48,
              alignItems: 'center',
              backgroundColor:
                activeTab === 'popularPosts' ? COLORS.primary50 : 'transparent',
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderBottomColor:
                activeTab === 'popularPosts'
                  ? COLORS.primary600
                  : 'transparent',
            }}
            onPress={() => setActiveTab('popularPosts')}
          >
            <Text
              style={[
                styles.tab,
                activeTab === 'popularPosts' && styles.activeTab,
              ]}
            >
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 48,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomWidth: 2,
              backgroundColor:
                activeTab === 'recentPosts' ? COLORS.primary50 : 'transparent',
              borderBottomColor:
                activeTab === 'recentPosts' ? COLORS.primary600 : 'transparent',
            }}
            onPress={() => setActiveTab('recentPosts')}
          >
            <Text
              style={[
                styles.tab,
                activeTab === 'recentPosts' && styles.activeTab,
              ]}
            >
              Recent
            </Text>
          </TouchableOpacity>
        </View>
        {postsData.map((post, index) => (
          <PostCard
            key={index}
            post={{
              ...post,
              author: {
                username: profile?.username,
                name: profile?.name,
              },
            }}
          />
        ))}
      </View>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  upperBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nameSection: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  threeDots: {
    paddingHorizontal: 10,
  },
  dotsText: {
    fontSize: 24,
    color: 'gray',
  },
  middleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  followButton: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabSection: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary50,
  },
  tab: {
    fontSize: 16,
    color: COLORS.black,
  },
  activeTab: {
    color: COLORS.primary800,
    fontWeight: '500',
  },
})

export default ProfileHeader
