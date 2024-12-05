import { View, Text } from 'react-native'
import React from 'react'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import RHFTextArea from '../../components/inputs/RHFTextArea'
import RHFTextField from '../../components/inputs/RHFTextField'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { COLORS, SIZE_CONSTANT } from '../../constants/theme'
import ProfileImage from '../../components/images/profile-image'
import { IconPencil } from '@tabler/icons-react-native'
import { Stack } from 'expo-router'
import { useContext } from 'react'
import { AuthContext } from '../../auth/context'
import { TAGS } from '../../constants'

export default function AccountProfileScreen() {
  const validationSchema = z.object({
    name: z.string().min(1, { message: 'Bu alan gerekli.' }),
    description: z.string().min(1, { message: 'Bu alan gerekli.' }),
  })

  const form = useForm({
    defaultValues: {
      name: '',
      surname: '',
      tag: '',
      description: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const { user } = useContext(AuthContext)

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
              // src={}
              style={{
                width: SIZE_CONSTANT * 7.2,
                height: SIZE_CONSTANT * 7.2,
                borderRadius: 50,
              }}
            />
          </View>
          <View
            style={{
              marginBottom: SIZE_CONSTANT * 4,
            }}
          >
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: SIZE_CONSTANT * 2,
            }}
          >
            <RHFTextField
              style={{
                backgroundColor: '#E6F4F1',
              }}
              label="Tag"
              name="tag"
              placeholder={
                TAGS.filter((tag) => tag.value === user?.tag)[0].label
              }
              defaultValue={user?.tag ?? 'Beginner'}
            />
            <RHFTextField
              placeholder={user?.name}
              label="Name"
              name="name"
              defaultValue={user?.name}
            />
            <RHFTextArea
              placeholder={'Create a description'}
              label="Bio"
              name="bio"
              defaultValue={user?.description ?? ''}
            />
          </View>
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  )
}
