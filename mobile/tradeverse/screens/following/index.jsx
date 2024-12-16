import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import api from '../../services/_axios'
import Header from '../../components/ui/header'
import ProfileImage from '../../components/images/profile-image'
import UserLink from '../../components/links/user-link'

const FollowingsScreen = () => {
  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await api.get('/follow/get-followings')
        setFollowers(response.data.followings || [])
      } catch (error) {
        console.error('Error fetching followings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFollowers()
  }, [])

  return (
    <GlobalScreen>
      <FullScrollView>
        <Header title="Followings" />
        {loading ? (
          <Text style={styles.loadingText}>Loading followings...</Text>
        ) : (
          <View>
            {followers.length > 0 ? (
              <Text style={styles.countText}>
                {followers.length &&
                  `You are following ${followers.length} users`}
              </Text>
            ) : null}
            {!followers.length ? (
              <Text style={styles.countText}>No followed users yet.</Text>
            ) : null}
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
    textAlign: 'left',
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

export default FollowingsScreen
