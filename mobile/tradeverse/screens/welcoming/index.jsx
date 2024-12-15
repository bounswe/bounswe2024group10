/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native'
import { launchImageLibraryAsync } from 'expo-image-picker'
import { router, useLocalSearchParams } from 'expo-router'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../constants/theme'
import GlobalScreen from '../../components/ui/global-screen'
import MainButton from '../../components/buttons/main-button'
import ProfileImage from '../../components/images/profile-image'
import { AuthContext } from '../../auth/context'
import * as FileSystem from 'expo-file-system'
import { setProfile } from '../../services/user'
import { TAGS } from '../../constants'
export default function WelcomingScreen() {
  const [currentStep, setCurrentStep] = useState('profile') // user_tag, profile
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedUserTag, setSelectedUserTag] = useState(null)
  const params = useLocalSearchParams()

  useEffect(() => {
    console.log(params)
  }, [params])

  const { setIsTagSelected, isTagSelected } = useContext(AuthContext)

  const openImageGallery = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0])
    }
  }

  const convertImageToBase64 = async (imageUri) => {
    if (!imageUri) return ''
    try {
      // Read the file and encode as base64
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      })
      return base64
    } catch (error) {
      console.log('Error converting image to base64:', error)
      throw error
    }
  }

  const handleNext = async () => {
    if (currentStep === 'profile') {
      setCurrentStep('user_tag')
    } else {
      try {
        const base64 = selectedImage
          ? await convertImageToBase64(selectedImage?.uri)
          : ''
        const res = await setProfile({
          username: params?.username,
          email: params?.email,
          bio: '',
          profilePhoto: '',
          tag: selectedUserTag,
        })

        if (res?.email) {
          router.replace('tabs')
        }
      } catch (error) {
        console.log('Error setting profile:', error)
      }
    }
  }

  const ProfileView = () => (
    <View>
      <Text
        style={{
          fontSize: SIZE_CONSTANT * 1.6,
          textAlign: 'center',
          color: COLORS.primary900,
          fontWeight: FONT_WEIGHTS.medium,
          letterSpacing: -0.2,
        }}
      >
        Set a profile picture
      </Text>
      <View
        style={{
          marginTop: SIZE_CONSTANT * 5,
        }}
      >
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pressable onPress={openImageGallery}>
            <ProfileImage
              deviceReference
              src={selectedImage}
              style={{
                borderWidth: 2,
                borderColor: COLORS.primary50,
                width: SIZE_CONSTANT * 14,
                height: SIZE_CONSTANT * 14,
                borderRadius: SIZE_CONSTANT * 7,
              }}
            />
          </Pressable>
        </View>
        <MainButton
          style={{
            marginTop: SIZE_CONSTANT * 4,
            backgroundColor: COLORS.primary50,
          }}
          textStyle={{ color: COLORS.primary900 }}
          text={selectedImage ? 'Modify Image' : 'Upload Image'}
          onPress={openImageGallery}
        />

        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: SIZE_CONSTANT * 3,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.primary300,
              letterSpacing: -0.2,
            }}
          >
            Skip for now
          </Text>
        </TouchableOpacity>
        {selectedImage && (
          <MainButton
            onPress={handleNext}
            style={{ marginTop: SIZE_CONSTANT * 7 }}
            text="Continue"
          />
        )}
      </View>
    </View>
  )

  const UserTagView = () => (
    <View>
      <Text style={styles.questionText}>
        What is your experience with finance ?
      </Text>

      {TAGS.map((option, index) => (
        <TouchableOpacity
          onPress={() => setSelectedUserTag(option.value)}
          key={index}
          style={styles.optionButton(option.value === selectedUserTag)}
        >
          <Text style={styles.optionText(option.value === selectedUserTag)}>
            {option.label}
          </Text>
          <Text style={styles.optionText}>{option.icon}</Text>
        </TouchableOpacity>
      ))}

      <MainButton
        onPress={handleNext}
        style={{ marginTop: SIZE_CONSTANT * 2 }}
        text="Continue"
        disabled={selectedUserTag === null}
      />
    </View>
  )

  return (
    <GlobalScreen>
      <Text style={styles.welcomeText}>{`Welcome ${params?.name}!`}</Text>
      {currentStep === 'user_tag' && <UserTagView />}
      {currentStep === 'profile' && <ProfileView />}
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  gradientText: {
    alignSelf: 'stretch',
    marginTop: 40,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: SIZE_CONSTANT * 2.4,
    fontWeight: FONT_WEIGHTS.bold,
    textAlign: 'center',
    color: COLORS.primary700,
    marginBottom: SIZE_CONSTANT * 8,
    letterSpacing: -0.03,
  },

  questionText: {
    fontSize: SIZE_CONSTANT * 1.6,
    color: '#1D1B4B',
    marginBottom: 20,
    fontWeight: FONT_WEIGHTS.medium,
    letterSpacing: -0.3,
  },

  optionButton: (isSelected = false) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isSelected ? COLORS.primary500 : '#EEF2FF',
    padding: 15,
    paddingHorizontal: SIZE_CONSTANT * 2,
    borderRadius: SIZE_CONSTANT * 0.6,
    marginBottom: SIZE_CONSTANT * 1.2,
    height: SIZE_CONSTANT * 6,
  }),
  optionText: (isSelected = false) => ({
    fontSize: SIZES.medium,
    color: isSelected ? COLORS.white : COLORS.primary800,
    fontWeight: FONT_WEIGHTS.medium,
  }),

  continueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary500,
    padding: 15,
    height: SIZE_CONSTANT * 4.4,
    borderRadius: SIZE_CONSTANT * 0.4,
    marginTop: 20,
  },

  continueText: {
    fontSize: SIZES.medium,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.white,
  },
})
