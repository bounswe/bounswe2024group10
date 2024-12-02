import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import {
  IconEye,
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

const AuthorInfo = ({ author }) => {
  return (
    <UserLink user={author}>
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
              width: SIZE_CONSTANT * 2.1,
              height: SIZE_CONSTANT * 2.1,
              borderRadius: (SIZE_CONSTANT * 2.1) / 2,
            }}
            src={author.profilePhoto}
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
              fontSize: SIZES.xxSmall,
              fontWeight: FONT_WEIGHTS.semibold,
              color: COLORS.black,
              letterSpacing: -0.03,
            }}
          >
            {author.name} {author.surname}
          </Text>
          <Text
            style={{
              fontSize: SIZE_CONSTANT * 0.8,
              color: '#A1A1A1',
              letterSpacing: -0.03,
              lineHeight: SIZE_CONSTANT * 0.9,
            }}
          >
            @{author.username}
          </Text>
        </View>
      </View>
    </UserLink>
  )
}

const SubforumInfo = ({ subforum }) => (
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
          fontSize: SIZE_CONSTANT * 0.64,
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

const TagText = ({ tag, index = 0, isLast = false }) => (
  <Text
    style={{
      display: 'inline',
      fontSize: SIZES.xSmall,
      color: COLORS.primary500,
      letterSpacing: -0.03,
    }}
  >
    {index === 0 ? '' : ' '}
    {tag.value}
  </Text>
)

const DefaultText = ({ text, index = 0 }) => (
  <Text
    style={{
      fontSize: SIZES.xSmall,
      color: COLORS.primary950,
      letterSpacing: -0.03,
    }}
  >
    {index === 0 ? '' : ' '}
    {text.value}
  </Text>
)

const InteractionInfo = ({ icon = () => {}, value }) => (
  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <View>{icon({ prop: { color: '#444' } })}</View>
    <View>
      <Text
        style={{
          fontSize: SIZE_CONSTANT * 0.8,
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

export default function PostCard({ style, post }) {
  const [isLiked, setIsLiked] = useState(isLiked)
  const [isDisliked, setIsDisliked] = useState(false)
  const handleLike = () => {
    setIsLiked(!isLiked)
  }
  const handleDislike = () => {
    setIsDisliked(!isDisliked)
  }
  return (
    <PostLink target={`${paths.EXPLORE.POST_DETAIL}?postId=${post.id}`}>
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AuthorInfo author={post.author} />
          <SubforumInfo subforum={post.parentSubforum} />
        </View>

        <View>
          <Text
            style={{
              fontSize: SIZES.small,
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
          <Text>
            {post.content.map((content, index) => {
              if (content.type === 'text') {
                return <DefaultText key={index} index={index} text={content} />
              }
              if (content.type === 'tag') {
                return <TagText key={index} index={index} tag={content} />
              }
              //   if (content.type === 'image') {
              //     return (
              //       <Image
              //         style={{
              //           marginVertical: 10,
              //           backgroundColor: 'red',
              //           width: 200,
              //           height: 200,
              //         }}
              //         key={index}
              //         source={content.value}
              //       />
              //     )
              //   }
            })}
          </Text>
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
            <InteractionInfo
              icon={(params) => <IconEye color="#444" size={12} />}
              value={post.views}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: SIZE_CONSTANT * 1.4,
            }}
          >
            <InteractionInfo
              icon={(params) => <IconMessageCircle2 color="#444" size={12} />}
              value={post.nofComments ?? 0}
            />
            <Pressable onPress={handleLike}>
              <InteractionInfo
                icon={(params) =>
                  isLiked ? (
                    <IconThumbUpFilled
                      fill={COLORS.primary900}
                      size={12}
                      strokeWidth={0}
                    />
                  ) : (
                    <IconThumbUp color="#444" size={12} />
                  )
                }
                value={post.nofLikes ?? 0}
              />
            </Pressable>
            <Pressable onPress={handleDislike}>
              <InteractionInfo
                icon={(params) =>
                  isDisliked ? (
                    <IconThumbDownFilled
                      fill={COLORS.primary900}
                      size={12}
                      strokeWidth={0}
                    />
                  ) : (
                    <IconThumbDown color="#444" size={12} />
                  )
                }
                value={post.nofDislikes ?? 0}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </PostLink>
  )
}
