/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
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

const AutoSuggestInput = ({ debounceDelay = 300, onSelect = () => {} }) => {
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
    if (!keyword) {
      setSuggestions([])
      return
    }

    setIsLoading(true)
    try {
      const response = await searchSubforumByTitle({ keyword })
      setSuggestions(response)
    } catch (error) {
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

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
    setInputValue(suggestion.title)
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
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
        placeholder="Search a subforum"
      />
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
                  <Text style={styles.suggestionItemText}>{item.title}</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderColor: '#ccc',
    maxHeight: 200,
    overflow: 'scroll',
  },
  suggestionItem: {
    padding: 10,
    // paddingVertical: 16,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionItemText: {
    fontSize: SIZES.small,
    color: '#222',
    fontWeight: '600',
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
