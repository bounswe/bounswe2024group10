import { View, Text } from 'react-native'
import React from 'react'
import {
  IconEye,
  IconMessage,
  IconMessageCircle2,
  IconThumbDown,
  IconThumbUp,
} from '@tabler/icons-react-native'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../../constants/theme'
import ProfileImage from '../../../components/images/profile-image'
import UserLink from '../../../components/links/user-link'
import paths from '../../../config/screen-paths'
import PostLink from '../../../components/links/post-link'
import SubforumLink from '../../../components/links/subforum-link'

// {
//     title: 'Title',
//     content: 'Content',
//     date: '2021-01-01',
//     likes: 10,
//     dislikes: 2,
//     comments: 5,
//     views: 1200,
//     subforum: {
//       name: 'Future Investment',
//       id: 1
//     },
//     author: {
//       name: 'Daron',
//       surname: 'Acemoglu',
//       username: '@daronacemoglu',
//       avatar:
//       id: 1,
//     },
//   }

const AuthorInfo = ({ author }) => (
  <UserLink user={author} target={paths.HOME.USER_PROFILE}>
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
          src={author.avatar}
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
            fontSize: SIZES.xSmall,
            fontWeight: FONT_WEIGHTS.semibold,
            color: COLORS.black,
            letterSpacing: -0.03,
          }}
        >
          @{author.username}
        </Text>
        {/* <Text
          style={{
            fontSize: SIZE_CONSTANT * 0.8,
            color: '#A1A1A1',
            letterSpacing: -0.03,
            lineHeight: SIZE_CONSTANT * 0.9,
          }}
        >
          @{author.username}
        </Text> */}
      </View>
    </View>
  </UserLink>
)

const SubforumInfo = ({ subforum }) => (
  <SubforumLink subForum={subforum} target={paths.HOME.SUBFORUM_DETAIL}>
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
    {index === 0 ? '' : ' '}@{tag.value}
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
  return (
    <PostLink target={paths.EXPLORE.POST_DETAIL} post={post}>
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
          {/* <SubforumInfo subforum={post.subforum} /> */}
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
          {post.content &&
            Array.isArray(post?.content) &&
            post?.content?.map((c, index) => {
              if (c?.type === 'text') {
                return <DefaultText key={index} index={index} text={c} />
              }
              if (c?.type === 'tag') {
                return <TagText key={index} index={index} tag={c} />
              }
            })}
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
              value={post.nofComments}
            />
            <InteractionInfo
              icon={(params) => <IconThumbUp color="#444" size={12} />}
              value={post.nofLikes}
            />
            <InteractionInfo
              icon={(params) => <IconThumbDown color="#444" size={12} />}
              value={post.nofDislikes}
            />
          </View>
        </View>
      </View>
    </PostLink>
  )
}
