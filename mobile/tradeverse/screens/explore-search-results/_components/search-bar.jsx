import React, { useEffect, useState } from 'react'
import { IconSearch } from '@tabler/icons-react-native'
import { View, TextInput, StyleSheet } from 'react-native'
import { COLORS, SIZE_CONSTANT } from '../../../constants/theme'

export default function SearchBar({ value, onChange }) {
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    if (value) {
      setSearchKey(value)
    }
  }, [value])
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          value={searchKey}
          style={styles.searchInput}
          placeholder="Search for anything.."
          placeholderTextColor="#A8ADD9"
          onChangeText={(e) => {
            setSearchKey(e)
            onChange(e)
          }}
          onSubmitEditing={() => {
            // router.push(`/${paths.EXPLORE.SEARCH}?searchKey=${searchKey}`);
          }}
        />
        <IconSearch color={COLORS.primary800} strokeWidth={1.5} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchContainer: {
    // width: "80%",
    flex: 1,
    flexDirection: 'row',
  },
  searchInput: {
    width: '80%',
    color: COLORS.primary950,
  },
  searchWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZE_CONSTANT * 1,
    paddingVertical: 10,
    backgroundColor: `${COLORS.primary50}80`,
    paddingHorizontal: 16,
  },
})
