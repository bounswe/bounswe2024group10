import { View, Text, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useDispatch } from 'react-redux'
import { IconCheck } from '@tabler/icons-react-native'
import GlobalScreen from '../../components/ui/global-screen'
import FullScrollView from '../../components/ui/full-scroll-view'
import RHFTextField from '../../components/inputs/RHFTextField'
import { createPost } from '../../services/post'
import { showToast } from '../../reduxStore/ui-slice'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../constants/theme'
import AutoSuggestInput from './_components/SubforumSuggestion'
import { AuthContext } from '../../auth/context'
import Header from '../../components/ui/header'
import ContentBox from './_components/ContentBox'
import TextField from '../../components/inputs/TextField'

export default function CreatePostScreen() {
  const [selectedSubforum, setSelectedSubforum] = useState(null)
  const [content, setContent] = useState([])
  const [title, setTitle] = useState('')
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const validationSchema = z.object({
    title: z.string().min(1, { message: 'Bu alan gerekli.' }),
  })
  const router = useRouter()

  const { subforumTitle, subforumId } = useLocalSearchParams()

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const handleCreate = async (data) => {
    try {
      const res = await createPost({
        username: user.username,
        title,
        content,
        parentID: subforumTitle ? subforumId : selectedSubforum.id,
      })
      if (res?.successful) {
        dispatch(
          showToast({ text: 'Post created successfully', variant: 'success' })
        )
        router.back()
      } else {
        dispatch(showToast({ text: res.message, variant: 'error' }))
      }
    } catch (error) {
      dispatch(showToast({ text: 'An error occurred', variant: 'error' }))
    }
  }

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Create Post',
          }}
        />
        <Header
          title="Create Post"
          headerRight={() => (
            <Pressable onPress={handleCreate}>
              <IconCheck
                strokeWidth={2.4}
                size={SIZE_CONSTANT * 2.4}
                color={COLORS.white}
              />
            </Pressable>
          )}
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
        {!subforumTitle && (
          <AutoSuggestInput
            onClear={() => {
              setSelectedSubforum(null)
            }}
            onSelect={(option) => {
              setSelectedSubforum(option)
            }}
            endpoint={'/post/search-post'}
          />
        )}
        {subforumTitle && (
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.primary800,
              fontWeight: 'bold',
            }}
          >
            {subforumTitle}
          </Text>
        )}
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
            <TextField
              value={title}
              variant="filled"
              name="title"
              label="Title"
              onChangeText={(e) => setTitle(e)}
              style={{
                width: '100%',
                height: SIZE_CONSTANT * 4.8,
                backgroundColor: '#FAFAFA',
                padding: SIZE_CONSTANT * 1.5,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 6,
                color: '#3C3B3B',
                fontSize: SIZES.small,
                fontWeight: 'regular',
                borderWidth: 1,
                borderColor: '#F8F8F8',
              }}
            />
            <ContentBox
              onChange={(val) => {
                setContent(val)
              }}
            />
          </View>
          <View style={{ height: SIZE_CONSTANT * 24 }}></View>
        </FormProvider>
      </FullScrollView>
    </GlobalScreen>
  )
}
