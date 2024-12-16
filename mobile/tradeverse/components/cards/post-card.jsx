import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import {
  IconMessageCircle2,
  IconThumbDown,
  IconThumbDownFilled,
  IconThumbUp,
  IconThumbUpFilled,
} from '@tabler/icons-react-native'
import PostLink from '../links/post-link'
import paths from '../../config/screen-paths'
import {
  SIZES,
  SIZE_CONSTANT,
  COLORS,
  FONT_WEIGHTS,
} from '../../constants/theme'
import UserLink from '../links/user-link'
import ProfileImage from '../images/profile-image'
import SubforumLink from '../links/subforum-link'
import {
  likePost,
  dislikePost,
  unlikePost,
  undislikePost,
} from '../../services/post'

import { formatDate } from '../../util/format-date'
import PostContent from './post-content'

const AuthorInfo = ({ author, scale = 1, screenPath }) => {
  return (
    <UserLink target={screenPath} user={author}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: SIZE_CONSTANT * 0.6,
          alignItems: 'center',
        }}
      >
        <View>
          <ProfileImage
            style={{
              width: SIZE_CONSTANT * 2.1 * scale,
              height: SIZE_CONSTANT * 2.1 * scale,
              borderRadius: (SIZE_CONSTANT * 2.1 * scale) / 2,
            }}
            src={author?.profilePhoto}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              fontSize: SIZES.xxSmall * scale,
              fontWeight: FONT_WEIGHTS.semibold,
              color: COLORS.black,
              letterSpacing: -0.03,
            }}
          >
            {author?.name} {author?.surname}
          </Text>
          <Text
            style={{
              fontSize: SIZE_CONSTANT * 0.8 * scale,
              color: '#A1A1A1',
              letterSpacing: -0.03,
              lineHeight: SIZE_CONSTANT * 0.9 * scale,
            }}
          >
            @{author?.username}
          </Text>
        </View>
      </View>
    </UserLink>
  )
}

const SubforumInfo = ({ subforum, scale = 1 }) => {
  if (!subforum?.id) return null
  return (
    <SubforumLink subForum={subforum}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZE_CONSTANT * 1.2,
          height: SIZE_CONSTANT * 1.6,
          backgroundColor: '#D4FFE7',
          borderWidth: 0.5,
          borderColor: '#EDFDFF',
          borderRadius: SIZE_CONSTANT * 1.2,
        }}
      >
        <Text
          style={{
            fontSize: SIZE_CONSTANT * 0.64 * scale,
            fontWeight: FONT_WEIGHTS.medium,
            color: '#107E64',
            letterSpacing: -0.03,
          }}
        >
          {subforum.title}
        </Text>
      </View>
    </SubforumLink>
  )
}

const InteractionInfo = ({ icon = () => {}, value, scale = 1 }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <View>{icon({ prop: { color: '#444' } })}</View>
    <View>
      <Text
        style={{
          fontSize: SIZE_CONSTANT * 0.8 * scale,
          color: '#444',
          letterSpacing: -0.03,
          fontWeight: FONT_WEIGHTS.medium,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
)

export default function PostCard({
  style,
  post,
  path = paths.EXPLORE.POST_DETAIL,
  scale = 1.12,
  disableLink = false,
}) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likeCount, setLikeCount] = useState(post.likeCount)

  const [isDisliked, setIsDisliked] = useState(post.isDisliked)
  const [dislikeCount, setDislikeCount] = useState(post.dislikeCount)

  const handleClickLike = async () => {
    let res
    if (isLiked) {
      res = await unlikePost({ postId: post.id })
      if (res.successful) {
        setLikeCount(likeCount - 1)
      }
    } else {
      res = await likePost({ postId: post.id })
      if (res.successful) {
        setLikeCount(likeCount + 1)
        if (isDisliked) {
          setIsDisliked(false)
          setDislikeCount(dislikeCount - 1)
        }
      }
    }
    if (res.successful) {
      setIsLiked(!isLiked)
    }
  }
  const handleClickDislike = async () => {
    let res
    if (isDisliked) {
      res = await undislikePost({ postId: post.id })
      if (res.successful) {
        setDislikeCount(dislikeCount - 1)
      }
    } else {
      res = await dislikePost({ postId: post.id })
      if (res.successful) {
        setDislikeCount(dislikeCount + 1)
        if (isLiked) {
          setIsLiked(false)
          setLikeCount(likeCount - 1)
        }
      }
    }
    if (res.successful) {
      setIsDisliked(!isDisliked)
    }
  }

  return (
    <PostLink disabled={disableLink} post={post}>
      <View
        style={{
          paddingHorizontal: SIZES.small,
          paddingTop: SIZE_CONSTANT * 1.2,
          paddingBottom: SIZE_CONSTANT * 1.4,
          borderBottomWidth: 0.5,
          borderBottomColor: '#E5E5E5',
          ...style,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AuthorInfo author={post.author} scale={scale} />
          <SubforumInfo
            scale={scale}
            subforum={{ ...post?.subforum, title: post?.subforum?.name }}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: SIZES.small * scale,
              fontWeight: FONT_WEIGHTS.semibold,
              color: COLORS.black,
              letterSpacing: -0.03,
              marginTop: SIZE_CONSTANT * 0.6,
              marginBottom: SIZE_CONSTANT * 0.8,
            }}
          >
            {post.title}
          </Text>
        </View>
        <View>
          <PostContent content={post?.content} scale={scale} />
        </View>
        <View
          style={{
            marginTop: SIZE_CONSTANT * 1.2,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: SIZES.xxSmall * scale,
                color: COLORS.graytext,
              }}
            >
              {formatDate(post.creationDate)}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: SIZE_CONSTANT * 1.4,
            }}
          >
            <InteractionInfo
              scale={scale}
              icon={(params) => (
                <IconMessageCircle2 color="#444" size={12 * scale} />
              )}
              value={post.commentCount ?? 0}
            />
            <Pressable onPress={handleClickLike}>
              <InteractionInfo
                scale={scale}
                icon={(params) =>
                  isLiked ? (
                    <IconThumbUpFilled
                      fill={COLORS.primary900}
                      size={12 * scale}
                      strokeWidth={0}
                    />
                  ) : (
                    <IconThumbUp color="#444" size={12} />
                  )
                }
                value={likeCount ?? 0}
              />
            </Pressable>
            <Pressable onPress={handleClickDislike}>
              <InteractionInfo
                scale={scale}
                icon={(params) =>
                  isDisliked ? (
                    <IconThumbDownFilled
                      fill={COLORS.primary900}
                      size={12 * scale}
                      strokeWidth={0}
                    />
                  ) : (
                    <IconThumbDown color="#444" size={12 * scale} />
                  )
                }
                value={dislikeCount ?? 0}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </PostLink>
  )
}
