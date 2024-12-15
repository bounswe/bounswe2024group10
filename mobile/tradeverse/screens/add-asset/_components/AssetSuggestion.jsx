/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from 'react-native'
import { IconInfoCircleFilled } from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'
import { COLORS, SHADOWS, SIZE_CONSTANT, SIZES } from '../../../constants/theme'
import ContentImage from '../../../components/images/content-image'
import AssetLink from '../../../components/links/asset-link'

const AutoSuggestInput = ({ debounceDelay = 300, onSelect = () => {} }) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { assets } = useSelector((state) => state.data)
  const router = useRouter()

  // Fetch suggestions from the API
  const fetchSuggestions = async (searchKey) => {
    setIsLoading(true)
    try {
      setIsLoading(true)

      const response = assets.filter(
        (asset) =>
          asset.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          asset.tradingViewSymbol
            .toLowerCase()
            .includes(searchKey.toLowerCase()) ||
          asset.yahooFinanceSymbol
            .toLowerCase()
            .includes(searchKey.toLowerCase())
      )
      setSuggestions(response)
    } catch (error) {
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle input change
  const handleChange = (value) => {
    setInputValue(value)
    fetchSuggestions(value)
    setShowSuggestions(true)
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(`${suggestion.name} | ${suggestion.tradingViewSymbol}`)
    setSelectedAsset(suggestion)
    setShowSuggestions(false)
    onSelect(suggestion)
  }
  useEffect(() => {
    fetchSuggestions('')
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        onFocus={() => {
          setShowSuggestions(true)
        }}
        onBlur={() => setShowSuggestions(false)} // Delay to allow click
        placeholder="Select an asset"
      />
      {showSuggestions && (
        <ScrollView
          showsVerticalScrollIndicator
          style={styles.suggestionsContainer}
        >
          {isLoading ? (
            <ActivityIndicator
              style={styles.loadingIndicator}
              size="small"
              color="#000"
            />
          ) : suggestions?.length > 0 ? (
            <View>
              {suggestions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem(index % 2 === 0)}
                  onPress={() => handleSuggestionClick(item)}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 8,
                      }}
                    >
                      <ContentImage
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 18,
                          borderColor: COLORS.primary50,
                          borderWidth: 1,
                        }}
                        src={item.imageUrl}
                      />
                      <View>
                        <Text
                          style={styles.suggestionItemText(index % 2 === 0)}
                        >
                          {item.name}
                        </Text>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                          }}
                        >
                          <View style={styles.symbolBadge(index % 2 === 0)}>
                            <Text
                              style={styles.symbolBadgeText(index % 2 === 0)}
                            >
                              {item.tradingViewSymbol}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <AssetLink asset={item}>
                      <IconInfoCircleFilled
                        fill={COLORS.primary500}
                        strokeWidth={0}
                      />
                    </AssetLink>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noSuggestionsText}>No Asset Found</Text>
          )}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 50,
    zIndex: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 48,
    backgroundColor: '#fff',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 2,
    borderColor: '#e0e0e0',
    maxHeight: 400,
    overflow: 'scroll',
  },
  suggestionItem: (isEven) => ({
    padding: 10,
    paddingVertical: 14,
    borderBottomWidth: 1,
    display: 'flex',
    // alignItems: 'center',
    backgroundColor: false ? COLORS.primary100 : 'white',
    borderBottomColor: '#e0e0e0',
  }),
  suggestionItemText: (isEven) => ({
    fontSize: SIZES.medium,
    color: COLORS.primary950,
    fontWeight: '600',
  }),
  noSuggestionsText: {
    padding: 10,
    textAlign: 'center',
    color: '#888',
  },
  loadingIndicator: {
    marginVertical: 10,
  },
  symbolBadge: (isEven) => ({
    backgroundColor: false ? COLORS.primary700 : COLORS.primary500,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  }),
  symbolBadgeText: (isEven) => ({
    fontSize: SIZE_CONSTANT * 0.8,
    color: 'white',
  }),
})

export default AutoSuggestInput
