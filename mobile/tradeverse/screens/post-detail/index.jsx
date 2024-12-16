import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { COLORS } from '../../constants/theme'
import PostCard from '../../components/cards/post-card'
import PostCardLoading from '../../components/cards/post-card-loading'
import { getPostDetail } from '../../services/post'
import Header from '../../components/ui/header'
import ProfileImage from '../../components/images/profile-image'
import { IconArrowBack, IconMessageReply } from '@tabler/icons-react-native'
import SkeletonBox from '../../components/ui/skeleton'
import PaddedContainer from '../../components/ui/padded-container'
import PostComment from '../../components/cards/post-comment'

export default function PostScreen() {
  const [likeStatus, setLikeStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handlePress = (type) => {
    setLikeStatus((prev) => (prev === type ? null : type))
  }

  const { postId } = useLocalSearchParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return
      try {
        setLoading(true)
        const res = await getPostDetail({ id: postId })
        setData(res)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchPost()
  }, [postId])

  const CommentCard = ({ item }) => {
    console.log('====================================')
    console.log(item.content)
    console.log('====================================')
    return (
      <View style={styles.commentBlock}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}
        >
          <View>
            <ProfileImage
              src={item.image}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
              }}
            />
            <View>
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.handle}>{item.username}</Text>
            </View>
          </View>
          <View>
            <IconArrowBack size={20} color={COLORS.primary500} />
          </View>
        </TouchableOpacity>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    )
  }

  const renderLoader = (
    <>
      <PostCardLoading />
      <View>
        <PaddedContainer
          style={{
            gap: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          <SkeletonBox height={12} borderRadius={20} width={'80%'} />
          <SkeletonBox height={12} borderRadius={20} width={'20%'} />
        </PaddedContainer>
        <PaddedContainer
          style={{
            gap: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          <SkeletonBox height={12} borderRadius={20} width={'80%'} />
          <SkeletonBox height={12} borderRadius={20} width={'20%'} />
        </PaddedContainer>
        <PaddedContainer
          style={{
            gap: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          <SkeletonBox height={12} borderRadius={20} width={'80%'} />
          <SkeletonBox height={12} borderRadius={20} width={'20%'} />
        </PaddedContainer>
      </View>
    </>
  )

  return (
    <GlobalScreen
      containerStyle={{
        paddingHorizontal: 0,
      }}
    >
      <Header title="Post Detail" />
      {loading && renderLoader}

      {!loading && data && (
        <>
          <PostCard
            disableLink
            scale={1.32}
            post={{
              ...data,
              author: {
                ...data.author,
                username: data.createdBy,
              },
              isLiked: data.isLikedByUser,
              isDisliked: data.isDislikedByUser,
            }}
            // style={{
            //   borderBottomWidth: 0.5,
            //   paddingBottom: 24,
            //   borderBottomColor: '#d0d0d0',
            // }}
          />
          <FlatList
            data={data?.comments}
            renderItem={(i) => (
              <>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.primary950,
                    marginLeft: 50,
                  }}
                ></Text>
                <PostComment item={i.item} />
              </>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      )}
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  commentBlock: { marginBottom: 10, paddingHorizontal: 15 },
  commentText: { marginLeft: 50, fontSize: 16 },
})
