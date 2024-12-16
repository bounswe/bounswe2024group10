import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { useDispatch } from 'react-redux'
import { IconPaperclip, IconPhotoPlus } from '@tabler/icons-react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import RHFTextArea from '../../components/inputs/RHFTextArea'
import RHFTextField from '../../components/inputs/RHFTextField'
import { createPost } from '../../services/post'
import { showToast } from '../../reduxStore/ui-slice'
import { SIZE_CONSTANT, SIZES } from '../../constants/theme'
import MainButton from '../../components/buttons/main-button'
import { AuthContext } from '../../auth/context'

export default function CreateSubforumPostScreen() {
  const { user } = useContext(AuthContext)
  const { title, id } = useLocalSearchParams()
  const dispatch = useDispatch()
  const validationSchema = z.object({
    title: z.string().min(1, { message: 'Bu alan gerekli.' }),
    content: z.string().min(1, { message: 'Bu alan gerekli.' }),
  })

  const form = useForm({
    defaultValues: {
      title: '',
      content: [],
    },
    resolver: zodResolver(validationSchema),
  })

  const handleCreate = async (data) => {
    const res = await createPost({
      username: user.username,
      title: data.title,
      content: data.content,
      parentID: id,
    })
    if (res?.successful) {
      dispatch(
        showToast({ text: 'Post created successfully', variant: 'success' })
      )
      router.back()
    }
  }

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Create Post',
            presentation: 'modal',
          }}
        />
        <Text
          style={{
            fontSize: SIZES.xSmall,
            color: '#3C3B3B',
            letterSpacing: -0.01,
          }}
        >
          Create Post Under
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            color: '#3C3B3B',
            letterSpacing: -0.01,
            fontWeight: 'bold',
            marginBottom: SIZE_CONSTANT * 2,
          }}
        >
          {title}
        </Text>
        <FormProvider {...form}>
          <View
            style={{
              marginBottom: SIZE_CONSTANT * 4,
            }}
          ></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <RHFTextField
              style={{
                marginBottom: SIZE_CONSTANT * 4,
              }}
              label="Title"
              name="title"
            />

            {/* <TextField multiline={true} style={{}} placeholder="Write your post here..." /> */}
            <RHFTextArea
              style={{
                marginBottom: 0,
              }}
              label="Content"
              name="content"
            />
            <View
              style={{
                backgroundColor: '#F4F4F4',
                paddingHorizontal: SIZES.xSmall,
                paddingVertical: SIZE_CONSTANT * 0.6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: SIZE_CONSTANT * 1,
                alignItems: 'center',
              }}
            >
              <IconPhotoPlus
                strokeWidth={1.5}
                size={SIZES.medium}
                color="#2C3E50"
              />
              <IconPaperclip
                strokeWidth={1.5}
                size={SIZES.medium}
                color="#2C3E50"
              />
            </View>
          </View>
          <MainButton
            disabled={form.formState.isSubmitting}
            loading={form.formState.isSubmitting}
            onPress={form.handleSubmit(handleCreate)}
            style={{
              marginTop: SIZE_CONSTANT * 12,
            }}
            text="Create Post"
          />
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  )
}
