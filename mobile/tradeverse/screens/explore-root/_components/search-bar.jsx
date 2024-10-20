import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react-native';
import { View, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SIZE_CONSTANT } from '../../../constants/theme';
import paths from '../../../config/screen-paths';

export default function SearchBar() {
  const [searchKey, setSearchKey] = useState('');
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for anything.."
          placeholderTextColor="#A8ADD9"
          onChangeText={(e) => {
            setSearchKey(e);
          }}
          onSubmitEditing={() => {
            router.push(`/${paths.HOME.SEARCH}?searchKey=${searchKey}`);
          }}
        />
        <IconSearch color={COLORS.primary800} strokeWidth={1.5} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  searchContainer: {
    flexDirection: 'row'
  },
  searchInput:{
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
    paddingHorizontal: 16
  }
});
