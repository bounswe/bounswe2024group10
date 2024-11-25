/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import api from '../../services/_axios'

const AutoSuggestInput = ({ endpoint, debounceDelay = 300 }) => {
  const [inputValue, setInputValue] = useState('')
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
  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([])
      return
    }

    setIsLoading(true)
    try {
      const response = await api({
        url: endpoint,
        method: 'GET',
        params: { query },
      })
      setSuggestions(response.data || [])
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced fetchSuggestions
  const debouncedFetchSuggestions = debounce(fetchSuggestions, debounceDelay)

  // Handle input change
  const handleChange = (value) => {
    setInputValue(value)
    debouncedFetchSuggestions(value)
    setShowSuggestions(true)
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion)
    setShowSuggestions(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
        placeholder="Type to search..."
      />
      {showSuggestions && (
        <View style={styles.suggestionsContainer}>
          {isLoading ? (
            <ActivityIndicator
              style={styles.loadingIndicator}
              size="small"
              color="#000"
            />
          ) : suggestions.length > 0 ? (
            <FlatList
              data={suggestions}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => handleSuggestionClick(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          ) : (
            <Text style={styles.noSuggestionsText}>No suggestions found</Text>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    maxHeight: 200,
    zIndex: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
