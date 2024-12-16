/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { searchSubforumByTitle } from '../../../services/subforum'
import { COLORS, SIZES } from '../../../constants/theme'
import { IconCancel, IconCrossFilled, IconX } from '@tabler/icons-react-native'

const AutoSuggestInput = ({
  debounceDelay = 300,
  onSelect = () => {},
  onClear = () => {},
}) => {
  const [keyword, setKeyword] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [selectedSubforum, setSelectedSubforum] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => func(...args), delay)
    }
  }

  // Fetch suggestions from the API
  const fetchSuggestions = async (keyword) => {
    // if (!keyword) {
    //   setSuggestions([])
    //   return
    // }

    setIsLoading(true)
    try {
      const response = await searchSubforumByTitle({ keyword })
      console.log('response', response)

      setSuggestions(response)
    } catch (error) {
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch when rendered
  useEffect(() => {
    fetchSuggestions('')
  }, [])

  // Debounced fetchSuggestions
  const debouncedFetchSuggestions = debounce(fetchSuggestions, debounceDelay)

  // Handle input change
  const handleChange = (value) => {
    setKeyword(value)
    setInputValue(value)
    debouncedFetchSuggestions(value)
    setShowSuggestions(true)
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name)
    setSelectedSubforum(suggestion)
    setShowSuggestions(false)
    onSelect(suggestion)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        onFocus={() => {
          setShowSuggestions(true)
        }}
        onBlur={() => {
          setShowSuggestions(false)
          if (selectedSubforum) {
            setInputValue(selectedSubforum.name)
          }
        }} // Delay to allow click
        placeholder="Search a subforum"
      />
      {selectedSubforum && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            setInputValue('')
            onClear()
            setSelectedSubforum(null)
          }}
        >
          <IconX size={16} fill={COLORS.white} color={COLORS.white} />
        </TouchableOpacity>
      )}
      {showSuggestions && (
        <ScrollView style={styles.suggestionsContainer}>
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
                  style={styles.suggestionItem}
                  onPress={() => handleSuggestionClick(item)}
                >
                  <View>
                    <Text style={styles.suggestionItemText}>{item.name}</Text>
                    <Text style={styles.suggestionItemDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: SIZES.xxSmall,
                        color: '#888',
                      }}
                    >
                      {item.postCount} Posts
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={styles.noSuggestionsText}>No Subforum Found</Text>
          )}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    zIndex: 100,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 48,
    backgroundColor: '#F4F4F4',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderColor: '#f0f0f0',
    maxHeight: 200,
    overflow: 'scroll',
  },
  cancelButton: {
    position: 'absolute',
    borderRadius: 12,
    top: 12,
    bottom: 0,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
    backgroundColor: COLORS.primary500,
  },
  suggestionItem: {
    padding: 10,
    // paddingVertical: 16,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  suggestionItemText: {
    fontSize: SIZES.small,
    // color: '#222',
    color: COLORS.primary800,
    fontWeight: '600',
  },
  suggestionItemDescription: {
    fontSize: SIZES.xSmall,
    color: '#888',
  },
  noSuggestionsText: {
    padding: 10,
    textAlign: 'center',
    color: '#888',
  },
  loadingIndicator: {
    marginVertical: 10,
  },
})

export default AutoSuggestInput
