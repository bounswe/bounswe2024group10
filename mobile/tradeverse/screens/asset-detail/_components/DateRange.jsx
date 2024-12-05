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
  Alert,
} from 'react-native'
import {
  IconCaretDownFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'
import { COLORS, SHADOWS, SIZES } from '../../../constants/theme'

const DateRange = ({ dateRange = '1Y', onSelect = () => {} }) => {
  const OPTIONS = ['1M', '3M', '6M', '1Y', '2Y', '5Y']
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [value, setValue] = useState(dateRange)

  // Handle input change
  const handleSelect = (val) => {
    setValue(val)
    onSelect(val)
    setShowSuggestions(val)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowSuggestions(!showSuggestions)}>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{dateRange}</Text>
          <IconCaretDownFilled
            color={COLORS.primary950}
            stroke={0}
            fill={COLORS.primary950}
          />
        </View>
      </Pressable>
      {showSuggestions && (
        <ScrollView
          showsVerticalScrollIndicator
          style={styles.suggestionsContainer}
        >
          <View>
            {OPTIONS.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionItem(index % 2 === 0)}
                onPress={() => {
                  handleSelect(item)
                  setShowSuggestions(false)
                }}
              >
                <Text style={styles.suggestionItemText(index % 2 === 0)}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    zIndex: 100,
  },
  valueContainer: {
    height: 36,
    marginVertical: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  value: {
    fontSize: SIZES.medium,
    color: COLORS.primary500,
    fontWeight: '600',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 36,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    // borderWidth: 1,
    elevation: 2,
    borderColor: '#e0e0e0',
    maxHeight: 200,
    overflow: 'scroll',
  },
  suggestionItem: (isEven) => ({
    paddingHorizontal: 10,
    height: 36,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: false ? COLORS.primary100 : 'white',
    borderBottomColor: '#e0e0e0',
  }),
  suggestionItemText: () => ({
    fontSize: SIZES.small,
    color: COLORS.primary950,
    fontWeight: '600',
  }),
})

export default DateRange
