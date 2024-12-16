import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { View, ActivityIndicator, Text, FlatList } from 'react-native'
import GlobalScreen from '../../components/ui/global-screen'
import PostCard from '../../components/cards/post-card'
import { getPostsByTag } from '../../services/post'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../constants/theme'
import FullScrollView from '../../components/ui/full-scroll-view'
import Header from '../../components/ui/header'
import PaddedContainer from '../../components/ui/padded-container'
import formatInteractionNumber from '../../util/format-number'

export default function TagPostsScreen() {
  const { tag } = useLocalSearchParams() // Fetch the tag from route params
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTagPosts = async () => {
      try {
        console.log('local param->', tag)

        setLoading(true) // Set loading state
        const response = await getPostsByTag({ tag }) // Pass token along with the tag

        // Transform posts to match PostCard structure
        const formattedPosts = response.map((post) => ({
          ...post,
          author: {
            name: post.author.name,
            username: post.createdBy,
            profilePhoto: post.author.userPhoto,
          },
        }))

        setPosts(formattedPosts) // Update posts state
        setLoading(false) // Loading complete
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.')
        setLoading(false)
      }
    }

    fetchTagPosts()
  }, [tag])

  const InteractionInfo = ({ icon, value }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: SIZE_CONSTANT * 0.2,
        alignItems: 'center',
      }}
    >
      <View>{icon()}</View>
      <Text
        style={{
          fontSize: SIZES.xxSmall,
          color: '#1D1B4B',
          letterSpacing: -0.03,
        }}
      >
        {formatInteractionNumber(value)}
      </Text>
    </View>
  )

  if (loading) {
    return (
      <GlobalScreen>
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <ActivityIndicator size="large" color={COLORS.primary500} />
          <Text style={{ marginTop: 16, color: COLORS.graytext }}>
            Loading posts...
          </Text>
        </View>
      </GlobalScreen>
    )
  }

  if (error) {
    return (
      <GlobalScreen>
        <Header title={tag} />
        <View style={{ marginTop: 24, alignItems: 'center' }}>
          <Text style={{ color: COLORS.danger, fontSize: 16 }}>{error}</Text>
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
      <Header
        headerBackTitleVisible={true}
        titleColor="black"
        bgColor={'white'}
        title={tag}
        headerTintColor="black"
        headerBackTitle="Back"
      />
      <PaddedContainer
        style={{
          paddingHorizontal: 15,
        }}
      >
        <View>
          <Text
            style={{
              color: COLORS.primary800,
              fontSize: SIZE_CONSTANT * 2,
              fontWeight: 'bold',
              marginBottom: SIZE_CONSTANT * 0.6,
            }}
          >
            {tag}
          </Text>
          <InteractionInfo
            icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>✍️</Text>}
            value={posts?.length}
          />
        </View>
      </PaddedContainer>
      <FullScrollView>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </FullScrollView>
    </GlobalScreen>
  )
}
