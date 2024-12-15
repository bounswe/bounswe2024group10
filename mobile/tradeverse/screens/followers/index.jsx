import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import api from '../../services/_axios'
import Header from '../../components/ui/header'
import ProfileImage from '../../components/images/profile-image'
import UserLink from '../../components/links/user-link'

const FollowersScreen = () => {
  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await api.get('/follow/get-followers')
        setFollowers(response.data.followers || [])
      } catch (error) {
        console.error('Error fetching followers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFollowers()
  }, [])

  return (
    <GlobalScreen>
      <FullScrollView>
        <Header title="Followers" />
        {loading ? (
          <Text style={styles.loadingText}>Loading followers...</Text>
        ) : (
          <View style={[]}>
            <Text style={styles.countText}>
              {followers.length
                ? `You have ${followers.length} Followers`
                : `
              No followers yet`}
            </Text>
            {followers.map((follower, index) => (
              <UserLink user={follower} key={follower.username}>
                <View style={styles.followerItem}>
                  <ProfileImage
                    src={follower.userPhoto}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                    }}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.username}>{follower.username}</Text>
                    <Text style={styles.name}>{follower.name}</Text>
                  </View>
                </View>
              </UserLink>
            ))}
          </View>
        )}
      </FullScrollView>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  followerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  userPhoto: {
    width: 50,
    // height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  name: {
    fontSize: 14,
    color: '#555',
  },
})

export default FollowersScreen
