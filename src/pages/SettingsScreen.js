import { GestureHandlerRootView} from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function SettingsScreen({ navigation }) {
  const [inputValue, setInputValue] = useState('');
  const [barInputValue, setBarInputValue] = useState('');
  const [barInputValue1, setBarInputValue1] = useState('');
  const [inputValue1, setInputValue1] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleBarInputChange = (text) => {
    setBarInputValue(text);
  };

  const handleInputChange1 = (text) => {
    setInputValue1(text);
  };

  const handleBarInputChange1 = (text) => {
    setBarInputValue1(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ width: 40 }} />
            <Text style={{ fontSize: 24 }}>ANIMAL TROVE</Text>
          </View>

          
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 20 }}>Profile Photo</Text>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' }} // Change the URI to the path of your image
              style={{ width: 100, height: 100, marginTop: 10 }} // Adjust width, height, and margin as needed
            />
          </View>
          <View style={{ marginBottom: 10, width: '100%' }}>
            <Text>username</Text>
            <View style={{ width: '100%', marginVertical: 10, borderWidth: 1, borderColor: 'black', padding: 10 }}>
              <TextInput
                value={barInputValue1}
                onChangeText={handleBarInputChange1}
                style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'black' }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 10, width: '100%'}}>
            <Text>Bio</Text>
            <View style={{ width: '100%', marginVertical: 10, borderWidth: 1, borderColor: 'black', padding: 10 }}>
              <TextInput
                value={inputValue1}
                onChangeText={handleInputChange1}
                style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'black' }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 10, width: '100%' }}>
            <Text>CURRENT PASSWORD</Text>
            <View style={{ width: '100%', marginVertical: 10, borderWidth: 1, borderColor: 'black', padding: 10 }}>
              <TextInput
                value={inputValue}
                onChangeText={handleInputChange}
                style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'black' }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 10, width: '100%' }}>
            <Text>NEW PASSWORD</Text>
            <View style={{ width: '100%', marginVertical: 10, borderWidth: 1, borderColor: 'black', padding: 10 }}>
              <TextInput
                value={barInputValue}
                onChangeText={handleBarInputChange}
                style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'black' }}
              />
            </View>
          </View>

          <Button
            title="SAVE CHANGES"
            onPress={() => console.log("saveeed")}
            color="green" // Change button color to green
          />
        </View>
      </ScrollView>
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Text style={{fontSize: 16, color: '#666666'}}> My Profile </Text>
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
    width: '100%',
    backgroundColor: '#f0f0f0',
    
    bottom: 0,
  },
});

export default SettingsScreen;
