import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import ProfileImage from '../../components/images/profile-image'
import { IconPencil } from '@tabler/icons-react-native'
import { Stack } from 'expo-router'
import { AuthContext } from '../../auth/context'
import { TAGS } from '../../constants'
import MainButton from '../../components/buttons/main-button'
import { setProfile } from '../../services/user'
import { useDispatch } from 'react-redux'
import { showToast } from '../../reduxStore/ui-slice'

export default function AccountProfileScreen() {
  // Validation schema for form
  const validationSchema = z.object({
    name: z.string().min(1, { message: 'This field is required.' }),
    bio: z.string().min(1, { message: 'This field is required.' }),
  })

  const form = useForm({
    defaultValues: {
      name: user?.name || '',
      bio: user?.bio || '',
      tag: user?.tag || 0,
    },
    resolver: zodResolver(validationSchema),
  })

  const { user, setUser } = useContext(AuthContext)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)
  const [profileState, setProfileState] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    tag: user?.tag || 0,
  })
  const [isTagSelectorOpen, setIsTagSelectorOpen] = useState(false)
  const [isDirty, setIsDirty] = useState(false) // Tracks unsaved changes
  const dispatch = useDispatch()

  // Handle field change
  const handleChange = (field, value) => {
    setProfileState((prevState) => ({ ...prevState, [field]: value }))
    setIsDirty(true) // Mark form as dirty
  }

  // Handle profile update submission
  const handleUpdateProfile = async () => {
    try {
      setIsSubmitLoading(true)

      const updatedProfile = {
        email: user.email, // Assuming email doesn't change
        //profilePhoto: user.profilePhoto, // Assuming profile photo is static here
        name: profileState.name,
        bio: profileState.bio,
        tag: profileState.tag,
        username: user.username,
      }

      const res = await setProfile(updatedProfile)
      if (res.isSuccessful) {
        dispatch(showToast({ text: 'Profile updated successfully' }))
      }

      setUser((prevUser) => ({
        ...prevUser,
        name: profileState.name,
        bio: profileState.bio,
        tag: profileState.tag,
      }))

      setIsDirty(false) // Reset dirty state
    } catch (error) {
      console.log('Profile update failed', error)
    } finally {
      setIsSubmitLoading(false)
    }
  }

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Profile Settings',
          }}
        />

        <FormProvider {...form}>
          {/* Profile Image */}
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <View
              style={{
                width: SIZE_CONSTANT * 7.2,
                height: SIZE_CONSTANT * 7.2,
                borderRadius: SIZE_CONSTANT * 3.6,
                backgroundColor: 'rgba(0,0,0,0.1)',
                position: 'absolute',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconPencil size={SIZE_CONSTANT * 2.4} color="white" />
            </View>
            <ProfileImage
              style={{
                width: SIZE_CONSTANT * 7.2,
                height: SIZE_CONSTANT * 7.2,
                borderRadius: 50,
              }}
            />
          </View>

          {/* Username */}
          <View style={{ marginBottom: SIZE_CONSTANT * 4 }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: SIZE_CONSTANT * 1.4,
                color: COLORS.graytext,
                marginTop: SIZE_CONSTANT * 0.8,
              }}
            >
              @{user?.username ?? 'username'}
            </Text>
          </View>

          {/* Form Fields */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: SIZE_CONSTANT * 2,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: SIZE_CONSTANT * 1.4,
                  marginBottom: SIZE_CONSTANT,
                }}
              >
                Tag
              </Text>
              {/* Tag Selector */}
              <Pressable
                onPress={() => setIsTagSelectorOpen(!isTagSelectorOpen)}
                style={{
                  backgroundColor: COLORS.primary500,
                  padding: 10,
                  borderRadius: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  minHeight: SIZE_CONSTANT * 4.8,
                  position: 'relative',
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: '500',
                  }}
                >
                  {TAGS.find((tag) => tag.value === profileState.tag)?.label
                    ? `${TAGS.find((tag) => tag.value === profileState.tag).icon} ${
                        TAGS.find((tag) => tag.value === profileState.tag).label
                      }`
                    : 'Select Tag'}
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    backgroundColor: COLORS.white,
                    zIndex: 99,
                    transform: [{ translateY: SIZE_CONSTANT * 4.8 }],
                    borderWidth: isTagSelectorOpen ? 1 : 0,
                    borderColor: '#e1e1e1',
                  }}
                >
                  {isTagSelectorOpen &&
                    TAGS.map((tag) => (
                      <Pressable
                        key={tag.value}
                        onPress={() => {
                          handleChange('tag', tag.value)
                          setIsTagSelectorOpen(false)
                        }}
                        style={{
                          padding: 10,
                          paddingVertical: SIZE_CONSTANT * 1.4,
                          borderBottomWidth: 1,
                          borderColor: '#e1e1e1',
                          width: '100%',
                        }}
                      >
                        <Text>
                          {tag.icon} {tag.label}
                        </Text>
                      </Pressable>
                    ))}
                </View>
              </Pressable>
            </View>

            <View
              style={{
                zIndex: -1,
              }}
            >
              <Text
                style={{
                  fontSize: SIZE_CONSTANT * 1.4,
                  marginBottom: SIZE_CONSTANT,
                }}
              >
                Name
              </Text>
              {/* Name Input */}
              <TextInput
                readOnly
                style={{
                  backgroundColor: '#f7f7f7',
                  padding: 10,
                  borderRadius: 6,
                  marginBottom: SIZE_CONSTANT,
                  minHeight: SIZE_CONSTANT * 4.8,
                }}
                value={profileState.name}
                //value={user.name}
                onChangeText={(value) => handleChange('name', value)}
                placeholder="Name"
              />
            </View>
            <View
              style={{
                zIndex: -1,
              }}
            >
              <Text
                style={{
                  fontSize: SIZE_CONSTANT * 1.4,
                  marginBottom: SIZE_CONSTANT,
                }}
              >
                Bio
              </Text>
              {/* Bio Input */}
              <TextInput
                style={{
                  backgroundColor: '#f7f7f7',
                  padding: 10,
                  borderRadius: 6,
                  minHeight: 100,
                  marginBottom: SIZE_CONSTANT,
                }}
                value={profileState.bio}
                //value={user.bio}
                onChangeText={(value) => handleChange('bio', value)}
                placeholder="Create a description"
                multiline
              />
            </View>
          </View>

          {/* Update Profile Button */}
          <MainButton
            onPress={handleUpdateProfile}
            disabled={!isDirty}
            loading={isSubmitLoading}
            text="Update Profile"
          />
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  )
}
