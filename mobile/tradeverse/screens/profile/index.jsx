import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import { Stack, useLocalSearchParams } from 'expo-router'
import PostCard from '../../components/cards/post-card'
import PaddedContainer from '../../components/ui/padded-container'

//import { getUserByUsername } from '../../mock-services/users'
//import { getPostsByUser } from '../../mock-services/post'
import { getUserByUsername } from '../../services/user'
import { getPostsByUser } from '../../services/post'


import formatInteractionNumber from '../../util/format-number'
import ProfileImage from '../../components/images/profile-image'
import {} from '../../services/user'

const ProfileHeader = () => {
  const [activeTab, setActiveTab] = useState('Recent') // State for tab selection
  const [postsData, setPostsData] = useState([])
  const [profile, setProfile] = useState({})

  const { username } = useLocalSearchParams()

  useEffect(() => {


    const fetchUserData = async () => {
      const profileResult = await getUserByUsername(username); // Ensure this fetches fresh data
      const postsResult = await getPostsByUser(username);

      setPostsData(postsResult);
      setProfile(profileResult);
    };

    const fetchUser = async () => {
      const res = getUserByUsername
    }


    fetchUserData();
  }, [username]);

  if (!profile || !postsData) {
    return <GlobalScreen />
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
              <ProfileImage style={styles.profileImage} src={profile.avatar} />
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
                {formatInteractionNumber(profile.followers)}
              </Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              xt style={styles.statNumber}>
                {profile?.totalPosts ?? profile?.posts?.length}
              </Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </PaddedContainer>
        <View style={styles.tabSection}>
          <TouchableOpacity onPress={() => setActiveTab('Recent')}>
            <Text
              style={[styles.tab, activeTab === 'Recent' && styles.activeTab]}
            >
              Recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Popular')}>
            <Text
              style={[styles.tab, activeTab === 'Popular' && styles.activeTab]}
            >
              Popular
            </Text>
          </TouchableOpacity>
        </View>
        {postsData.map((post, index) => (
          <PostCard key={index} post={post} />
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
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  activeTab: {
    textDecorationLine: 'underline',
  },
})

export default ProfileHeader
