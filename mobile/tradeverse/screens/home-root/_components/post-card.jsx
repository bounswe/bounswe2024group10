import React, { useContext, useState, useEffect } from "react";

import { View, Text, Pressable } from "react-native";

import { Storage } from "../../../util/storage";

import { likePost, dislikePost, unlikePost, undislikePost } from "../../../services/post";

import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from "../../../constants/theme";

import {
  IconEye,
  IconMessage,
  IconMessageCircle2,
  IconThumbDown,
  IconThumbUp,
  IconThumbUpFilled
} from "@tabler/icons-react-native";

import ProfileImage from "../../../components/images/profile-image";
import UserLink from "../../../components/links/user-link";
import paths from "../../../config/screen-paths";
import PostLink from "../../../components/links/post-link";
import SubforumLink from "../../../components/links/subforum-link";

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

const AuthorInfo = ({ author }) => {
  if (!author) return
  return (
    <UserLink user={author} target={paths.HOME.USER_PROFILE}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: SIZE_CONSTANT * 0.6,
          alignItems: "center",
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
            width: SIZE_CONSTANT * 2.1,
            height: SIZE_CONSTANT * 2.1,
            borderRadius: (SIZE_CONSTANT * 2.1) / 2,
          }}
          src={author.avatar}
        />
      </View>
    </UserLink>
  );
};

const SubforumInfo = ({ subforum }) => {
  if (!subforum) return <></>;
  return (
    <SubforumLink subForum={subforum} target={paths.HOME.SUBFORUM_DETAIL}>
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
      </View>
    </SubforumLink>
  );
};

const TagText = ({ tag, index = 0, isLast = false }) => {
  return (
    <Text
      style={{
        display: "inline",
        fontSize: SIZES.xSmall,
        color: COLORS.primary500,
        letterSpacing: -0.03,
      }}
    >
      {index === 0 ? "" : " "}@{tag.value}
    </Text>
  );
};

const DefaultText = ({ text, index = 0 }) => {
  return (
    <Text
      style={{
        fontSize: SIZES.xSmall,
        color: COLORS.primary950,
        letterSpacing: -0.03,
      }}
    >
      {index === 0 ? "" : " "}
      {text.value}
    </Text>
  );
};

const InteractionInfo = ({ icon = () => {}, value }) => (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <View>{icon({ prop: { color: "#444" } })}</View>
      <View>
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
  );

export default function PostCard({ style, post }) {
  {/* for handle likes*/}
  // const { user } = useContext(AuthContext)
  const [isLiked, setIsLiked] = useState(post?.isLiked ?? false)
  const [username, setUsername] = useState();


  useEffect(() => {
    const handleUserFetch = async () => {
      const username = await Storage.getItem('username');
      setUsername(username)
    };

    handleUserFetch();
  }, [])

  const handleLike = async () => {
    const response = await likePost({
      postId: post?.id,
      username,
      post
    })
    if (response.success) {
      setIsLiked(true)
    } else {
      // set to true because its a mock
      setIsLiked(true)
    }
  }


  {/* for handle dislikes */}
  const [isDisliked, setIsDisliked] = useState(post?.isDisliked ?? false);
  const handleDislike = async () => {
    const response = await dislikePost({
      postId: post?.id,
      username,
      post
    });
  
    if (response?.success) {
      setIsDisliked(true);
      setIsLiked(false); // Disliking typically removes a like, adjust if behavior differs.
    }
  };

  {/*for handle unlike*/}
  const handleUnlike = async () => {
    const response = await unlikePost({
      postId: post?.id,
      username: username,
    });
  
    if (response?.success) {
      setIsLiked(false);
    }
  };

  {/* for handle undislike */}
  const handleUndislike = async () => {
    const response = await undislikePost({
      postId: post?.id,
      username: username,
    });
  
    if (response?.success) {
      setIsDisliked(false);
    }
  };


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
            display: 'flex',
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
            {post && post.content && post.content.map((content, index) => {
              if (content.type === "text") {
                return <DefaultText key={index} index={index} text={content} />;
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
              value={post.views}
            />

            {/* presslendiğinde filliyo */}
            {/* <Pressable onPress={handleLike} >
              <InteractionInfo
                icon={(params) =>
                  isLiked ? (
                    <IconThumbUpFilled
                      fill={COLORS.primary500}
                      strokeWidth={0}
                      color="#444"
                      size={12}
                    />
                  ) : (
                    <IconThumbUp color="#444" size={12} />
                  )
                }
                value={post.views}
              />
            </Pressable> */}

            <Pressable onPress={handleLike} style={{zIndex: 5}}>
              <InteractionInfo
                icon={(params) =>
                  !isLiked ? (
                    <IconThumbUp color="#444" size={12} />
                  ) : (
                    <IconThumbUpFilled
                      fill={COLORS.primary500}
                      strokeWidth={0}
                      color="#444"
                      size={12}
                    />
                  )
                }
                value={post.likes}
              />
            </Pressable>


            <Pressable onPress={isDisliked ? handleUndislike : handleDislike} style={{zIndex: 5}}>
              <InteractionInfo
                icon={(params) =>
                  isDisliked ? (
                    <IconThumbDown
                      fill={COLORS.primary500}
                      strokeWidth={0}
                      color="#444"
                      size={12}
                    />
                  ) : (
                    <IconThumbDown color="#444" size={12} />
                  )
                }
                value={post.dislikes}
              />
            </Pressable>



          </View>
        </View>
      </View>
    </PostLink>
  )
}
