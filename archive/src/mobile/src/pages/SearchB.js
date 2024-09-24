import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleSearch = (prefix) => {
    if (searchQuery.trim() === '') {
      Alert.alert('Error', 'Please enter a search query.');
      return;
    }
    // Concatenate the selected prefix with the search input
    const prefixedSearchQuery = prefix + searchQuery;
    console.log('Searching for:', prefixedSearchQuery);
    // Navigate to the search results screen with the prefixed search query
    navigation.navigate('SearchResults', { searchQuery: prefixedSearchQuery });
  };

  const handleButtonClick = (prefix) => {
    // Toggle the selected button
    setSelectedButton(prefix);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        {/* Button for family search */}
        <TouchableOpacity
          style={{ backgroundColor: selectedButton === 'f@' ? 'lightblue' : 'lightgray', padding: 10, borderRadius: 5 }}
          onPress={() => handleButtonClick('f@')}
          disabled={selectedButton === 'f@'}
        >
          <Text>Family</Text>
        </TouchableOpacity>
        {/* Button for work search */}
        <TouchableOpacity
          style={{ backgroundColor: selectedButton === 's@' ? 'lightgreen' : 'lightgray', padding: 10, borderRadius: 5 }}
          onPress={() => handleButtonClick('s@')}
          disabled={selectedButton === 's@'}
        >
          <Text>Species</Text>
        </TouchableOpacity>
        
      </View>
      <TextInput
        placeholder="Enter search query"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={{ width: '100%', marginBottom: 20, borderWidth: 1, borderColor: 'black', padding: 10 }}
      />
      
      <TouchableOpacity
        onPress={() => handleSearch(selectedButton)}
        style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}
        disabled={!searchQuery.trim() || selectedButton==null }
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
      {/* Bottom navigation bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50, backgroundColor: '#f0f0f0', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <Icon name="plus" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Icon name="user" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchScreen;
