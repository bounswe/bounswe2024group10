import { router } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import { IconChevronRight } from '@tabler/icons-react-native'
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  SIZES,
  COLORS,
  SIZE_CONSTANT,
  FONT_WEIGHTS,
} from '../../../constants/theme'
import ProfileImage from '../../../components/images/profile-image'
import paths from '../../../config/screen-paths'
import { AuthContext } from '../../../auth/context'
import { getImageSource } from '../../../util/get-image-source'

export default function ProfileInfo() {
  const { user } = useContext(AuthContext)

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.navigate(paths.ACCOUNT.PROFILE)
      }}
    >
      <View style={styles.leftContainer}>
        <ProfileImage
          src={getImageSource(user?.profilePhoto)}
          style={styles.avatar}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.nameText}>{user?.name}</Text>
        <Text style={styles.usernameText}>@{user?.username}</Text>
      </View>
      <View style={styles.chevronContainer}>
        <IconChevronRight size={24} color={COLORS.primary500} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SIZES.xSmall,
    marginBottom: SIZE_CONSTANT * 6,
  },
  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: SIZE_CONSTANT * 3.6,
    height: SIZE_CONSTANT * 3.6,
    borderRadius: SIZE_CONSTANT * 4,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: SIZES.medium,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.content,
  },
  usernameText: {
    fontSize: SIZES.xSmall,
    color: COLORS.graytext,
  },
})
