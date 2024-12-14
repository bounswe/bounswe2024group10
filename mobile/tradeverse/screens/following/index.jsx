import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { View, Text, Image, StyleSheet } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import api from '../../services/_axios'

const FollowingScreen = () => {
  const [followings, setFollowings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const mockData = [
    {
      username: 'gulsen',
      name: 'Gulsen',
      userPhoto: null,
    },
  ]

  useEffect(() => {
    const fetchFollowings = async () => {
      try {
        const response = await api.get('/follow/get-followings')
        setFollowings(response.data.followings || mockData)
      } catch (error) {
        console.error('Error fetching followings:', error)
        setFollowings(mockData)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchFollowings()
  }, [])

  if (loading) {
    return (
      <GlobalScreen>
        <Text style={styles.loadingText}>Loading following...</Text>
      </GlobalScreen>
    )
  }

  if (error && followings.length === 0) {
    return (
      <GlobalScreen>
        <Text style={styles.errorText}>Failed to load followings.</Text>
      </GlobalScreen>
    )
  }

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Following',
          }}
        />
        <View style={styles.container}>
          <Text style={styles.countText}>
            Following Count: {followings.length}
          </Text>
          {followings.map((following, index) => (
            <View key={index} style={styles.followingItem}>
              <Image
                source={{
                  uri: following.userPhoto || 'https://via.placeholder.com/50',
                }}
                style={styles.userPhoto}
              />
              <View style={styles.textContainer}>
                <Text style={styles.username}>{following.username}</Text>
                <Text style={styles.name}>{following.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </FullScrollView>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  followingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#ddd', // Placeholder color for fallback
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

export default FollowingScreen
