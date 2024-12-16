/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-template */
import React, { useEffect, useState } from 'react'
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'
import {
  COLORS,
  FONT_WEIGHTS,
  SIZE_CONSTANT,
  SIZES,
} from '../../../constants/theme'
import { searchTag, searchAsset, searchUser } from '../../../services/search'
import ContentImage from '../../../components/images/content-image'
import ProfileImage from '../../../components/images/profile-image'
import { getImageSource } from '../../../util/get-image-source'

const Tag = ({ tag }) => (
  <Text style={{ color: COLORS.primary500 }}>@{tag}</Text>
)

const User = ({ user }) => (
  <Text style={{ color: COLORS.primary500 }}>~{user}</Text>
)

const Asset = ({ asset }) => (
  <Text style={{ color: COLORS.primary500 }}>${asset}</Text>
)

const Chart = ({ assetChart }) => (
  <Text style={{ color: COLORS.primary500 }}>{assetChart}</Text>
)

export default function ContentBox({ onChange = () => {} }) {
  const [textValue, setTextValue] = useState('')
  const [suggestionPanel, setSuggestionPanel] = useState(null)
  const [suggestionsLoading, setSuggestionsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [activeType, setActiveType] = useState(null)

  const categorizeContentText = (text) => {
    const splitted = text.split(' ')
    const categorized = splitted.map((word) => {
      if (word.startsWith('@')) return { type: 'tag', value: word.slice(0) }
      if (word.startsWith('~')) return { type: 'user', value: word.slice(1) }
      if (word.startsWith('$')) return { type: 'asset', value: word.slice(1) }
      if (word.startsWith('>>')) return { type: 'chart', value: word.slice(1) }
      return { type: 'text', value: word }
    })
    return categorized
  }

  const AssetSuggestion = ({ asset }) => (
    <View>
      <Pressable
        key={asset}
        onPress={() => handleSuggestionSelect(asset.tradingViewSymbol)}
      >
        <View
          style={{
            paddingHorizontal: SIZES.small,
            paddingTop: SIZE_CONSTANT * 1.2,
            paddingBottom: SIZE_CONSTANT * 1.4,
            borderBottomWidth: 0.5,
            borderBottomColor: '#E5E5E5',
            display: 'flex',
            flexDirection: 'row',
            gap: SIZE_CONSTANT * 1.2,
            alignItems: 'center',
          }}
        >
          <ContentImage
            src={asset.imageUrl}
            style={{
              height: SIZE_CONSTANT * 2.4,
              width: SIZE_CONSTANT * 2.4,
              borderRadius: SIZE_CONSTANT * 1.2,
              borderWidth: 0.5,
              borderColor: '#E5E5E5',
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                fontSize: SIZES.medium,
                fontWeight: FONT_WEIGHTS.semibold,
              }}
            >
              {asset.name}
            </Text>
            <Text
              style={{
                color: COLORS.graytext,
                fontSize: SIZES.xxSmall,
              }}
            >
              {asset.tradingViewSymbol}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )

  const UserSuggestion = ({ user }) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: SIZE_CONSTANT * 0.6,
        paddingHorizontal: SIZES.small,
        paddingTop: SIZE_CONSTANT * 1.2,
        paddingBottom: SIZE_CONSTANT * 1.4,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5E5',
      }}
    >
      <View>
        <ProfileImage
          style={{
            width: SIZE_CONSTANT * 4,
            height: SIZE_CONSTANT * 4,
            borderRadius: (SIZE_CONSTANT * 4) / 2,
            borderColor: COLORS.primary50,
            borderWidth: 1,
          }}
          src={getImageSource(user.userPhoto)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: SIZE_CONSTANT * 0.2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.small,
            fontWeight: FONT_WEIGHTS.semibold,
            color: COLORS.black,
            letterSpacing: -0.03,
            marginBottom: SIZE_CONSTANT * 0.2,
          }}
        >
          {user.name} {user.surname}
        </Text>
        <Text
          style={{
            fontSize: SIZES.xxSmall,
            color: '#A1A1A1',
            letterSpacing: -0.03,
            lineHeight: SIZE_CONSTANT * 0.9,
          }}
        >
          @{user.username}
        </Text>
      </View>
    </View>
  )

  const TagSuggestion = ({ tag }) => (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5E5',
        paddingTop: SIZE_CONSTANT * 1.2,
        paddingBottom: SIZE_CONSTANT * 1.4,
        paddingHorizontal: SIZE_CONSTANT * 1.2,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary500,
          letterSpacing: -0.03,
          fontWeight: FONT_WEIGHTS.medium,
          marginBottom: SIZE_CONSTANT * 0.8,
        }}
      >
        {tag.label}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: SIZE_CONSTANT * 2,
        }}
      >
        {/* <InteractionInfo
            icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>✍️</Text>}
            value={tag.posts}
          />
          <InteractionInfo
            icon={() => <Text style={{ fontSize: SIZES.xxSmall }}>👤</Text>}
            value={tag.people}
          /> */}
      </View>
    </View>
  )

  const handleInputChange = async (text) => {
    setTextValue(text)
    onChange(categorizeContentText(text))

    // Determine the last word and match the type for suggestions
    const words = text.split(' ')
    const lastWord = words[words.length - 1]

    const keyword = lastWord.slice(1)
    if (lastWord.startsWith('@')) {
      setSuggestionsLoading(true)
      setActiveType('tag')
      const result = await searchTag({ keyword })
      setSuggestions(result)
      setSuggestionPanel(true)
      setSuggestionsLoading(false)
    } else if (lastWord.startsWith('~')) {
      setActiveType('user')
      setSuggestionsLoading(true)
      const result = await searchUser({ keyword })
      setSuggestionsLoading(false)
      setSuggestions(result)
      setSuggestionPanel(true)
    } else if (lastWord.startsWith('$')) {
      setActiveType('asset')
      setSuggestionsLoading(true)
      const result = await searchAsset({ keyword })
      setSuggestionsLoading(false)
      setSuggestions(result)
      setSuggestionPanel(true)
    } else if (lastWord.startsWith('>>')) {
      setActiveType('chart')
      setSuggestionPanel(false)
    } else {
      setSuggestionPanel(false)
    }
  }

  const handleSuggestionSelect = (suggestion) => {
    const words = textValue.split(' ')
    words[words.length - 1] =
      `${activeType === 'tag' ? '@' : activeType === 'user' ? '~' : '$'}${suggestion}`
    setTextValue(words.join(' ') + ' ')
    setSuggestionPanel(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Content</Text>
      <TextInput
        multiline
        style={styles.textInput}
        value={textValue}
        onChangeText={handleInputChange}
        placeholder="Write your post..."
      />
      {suggestionPanel && suggestions.length > 0 && (
        <View style={styles.suggestionList}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#EfEfEf',
            }}
          >
            <Text
              style={{
                textAlign: 'right',
                marginTop: SIZE_CONSTANT * 0.6,
                marginBottom: SIZE_CONSTANT * 0.6,
                paddingHorizontal: SIZE_CONSTANT * 1.2,
                color: COLORS.primary900,
              }}
            >
              {activeType === 'tag'
                ? 'Tags'
                : activeType === 'user'
                  ? 'Users'
                  : 'Assets'}
            </Text>
          </View>
          {!suggestionsLoading &&
            suggestions.map((item) => {
              if (activeType === 'tag')
                return (
                  <Pressable
                    key={item}
                    onPress={() => {
                      if (item.includes('@')) {
                        handleSuggestionSelect(item.slice(1))
                      } else {
                        handleSuggestionSelect(item)
                      }
                    }}
                  >
                    <TagSuggestion tag={{ label: item }} />
                  </Pressable>
                )

              if (activeType === 'user') {
                return (
                  <Pressable
                    key={item.username}
                    onPress={() => {
                      handleSuggestionSelect(item.username)
                    }}
                  >
                    <UserSuggestion key={item.username} user={item} />
                  </Pressable>
                )
              }
              if (activeType === 'asset')
                return <AssetSuggestion key={item.name} asset={item} />
              return null
            })}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZE_CONSTANT * 2,
    position: 'relative',
    width: '100%',
  },
  label: {
    color: '#3C3B3B',
    fontSize: SIZES.small,
    fontWeight: 'regular',
    marginBottom: SIZE_CONSTANT * 0.4,
    paddingLeft: SIZE_CONSTANT * 0.4,
  },
  textInput: {
    padding: 8,
    color: '#3C3B3B',
    fontSize: SIZES.small,
    fontWeight: 'regular',
    marginBottom: SIZE_CONSTANT * 0.4,
    paddingLeft: SIZE_CONSTANT * 0.4,

    minHeight: 200,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 4,
  },
  suggestionList: {
    postion: 'absolute',
    zIndex: 100,
    top: 0,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  suggestionItem: {
    padding: 8,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  suggestionText: {
    fontSize: SIZES.medium,
    color: COLORS.primary500,
  },
})
