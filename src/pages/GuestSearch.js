import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      Alert.alert('Error', 'Please enter a search query.');
      return;
    }
    // Implement your search logic here, such as fetching data from an API
    console.log('Searching for:', searchQuery);
    // Example: You can make an API call here with the searchQuery
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <TextInput
        placeholder="Enter search query"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={{ width: '100%', marginBottom: 20, borderWidth: 1, borderColor: 'black', padding: 10}}
      />
      <Button
        title="Search"
        onPress={handleSearch}
        color="green" // Change button color to green
      />
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Guest')}>
          <MaterialIcon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GuestS')}>
          <MaterialIcon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')}>
          <MaterialIcon name="person-add" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    bottomNavBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      width: '100%', // Ensure the bottom navigation bar spans the full width of the screen
      position: 'absolute', // Position the bottom navigation bar at the bottom of the screen
      bottom: 0, // Align the bottom of the navigation bar with the bottom of the screen
      backgroundColor: '#f0f0f0',
      borderTopWidth: 1, // Add a border at the top of the navigation bar for separation
      borderTopColor: 'gray', // Set the border color
    },
    iconText: {
      marginLeft: 3,
    },
  });

export default SearchScreen;
