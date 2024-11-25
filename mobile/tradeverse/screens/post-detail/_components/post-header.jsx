import { View, Text } from 'react-native'
import React from 'react'
import {
  IconEye,
  IconMessageCircle2,
  IconThumbDown,
  IconThumbUp,
} from '@tabler/icons-react-native'
import { COLORS, FONT_WEIGHTS } from '../../../constants/theme'
import ProfileImage from '../../../components/images/profile-image'
import UserLink from '../../../components/links/user-link'
import paths from '../../../config/screen-paths'
import PostLink from '../../../components/links/post-link'
import SubforumLink from '../../../components/links/subforum-link'

// Constants for sizes
const SIZE_CONSTANT = 14
const SIZES = {
  xxSmall: SIZE_CONSTANT * 1,
  xSmall: SIZE_CONSTANT * 1.2,
  small: SIZE_CONSTANT * 1.4,
  medium: SIZE_CONSTANT * 1.6,
  large: SIZE_CONSTANT * 1.8,
  xLarge: SIZE_CONSTANT * 2,
}

// Author info component
const AuthorInfo = ({ author }) => {
  if (!author) return null
  return (
    <UserLink user={author} target={paths.HOME.USER_PROFILE}>
      <View style={{ flexDirection: 'row', gap: SIZE_CONSTANT * 0.6, alignItems: 'center' }}>
        <ProfileImage
          style={{
            width: SIZE_CONSTANT * 2.1,
            height: SIZE_CONSTANT * 2.1,
            borderRadius: SIZE_CONSTANT * 2.1 / 2,
          }}
          src={author.avatar}
        />
        <View style={{ flexDirection: 'column' }}>
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
            }}
          >
            @{author.username}
          </Text>
        </View>
      </View>
    </UserLink>
  )
}

// Subforum info component
const SubforumInfo = ({ subforum }) => (
  <SubforumLink subForum={subforum} target={paths.HOME.SUBFORUM_DETAIL}>
    <View
      style={{
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

// Tag text component
const TagText = ({ tag, index = 0 }) => (
  <Text
    style={{
      display: 'inline',
      fontSize: SIZES.xSmall,
      color: COLORS.primary500,
      letterSpacing: -0.03,
    }}
  >
    {index === 0 ? '' : ' '}@{tag.value}
  </Text>
)

// Default text component for post content
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

// Interaction info component (views, likes, comments, etc.)
const InteractionInfo = ({ icon, value }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View>{icon}</View>
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
)

export default function PostHeader({ style, post }) {
  return (
    <PostLink target={paths.HOME.POST_DETAIL} post={post}>
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <AuthorInfo author={post.author} />
          <SubforumInfo subforum={post.subforum} />
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
            {post.content &&
              post.content.map((content, index) => {
                if (content.type === 'text') {
                  return <DefaultText key={index} index={index} text={content} />
                }
                if (content.type === 'tag') {
                  return <TagText key={index} index={index} tag={content} />
                }
              })}
          </Text>
        </View>

        <View
          style={{
            marginTop: SIZE_CONSTANT * 1.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <InteractionInfo
            icon={<IconEye color="#444" size={12} />}
            value={post.views}
          />

          <View style={{ flexDirection: 'row', gap: SIZE_CONSTANT * 1.4 }}>
            <InteractionInfo
              icon={<IconMessageCircle2 color="#444" size={12} />}
              value={post.comments}
            />
            <InteractionInfo
              icon={<IconThumbUp color="#444" size={12} />}
              value={post.likes}
            />
            <InteractionInfo
              icon={<IconThumbDown color="#444" size={12} />}
              value={post.dislikes}
            />
          </View>
        </View>
      </View>
    </PostLink>
  )
}
