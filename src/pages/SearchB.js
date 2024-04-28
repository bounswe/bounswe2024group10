import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50, backgroundColor: '#f0f0f0', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchScreen;
