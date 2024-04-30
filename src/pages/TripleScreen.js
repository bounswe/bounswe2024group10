import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

function TriplePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: width * 0.8, marginBottom: 20 }}>
        <Button
          title="POST"
          // connect with user page
          onPress={() => navigation.navigate('Post')}
          color="green" // Change button color to green
        />
      </View>
      <View style={{ width: width * 0.8, marginBottom: 20 }}>
        <Button
          title="DELETE ACCOUNT"
          // connect with sign up page
          onPress={() => navigation.navigate('Main')}
          color="green" // Change button color to green
        />
      </View>
      <View style={{ width: width * 0.8, marginBottom: 20 }}>
          <Button
              title="MY PROFILE"
              // connect with sign up page
              onPress={() => navigation.navigate('MyProfile')}
              color="green" // Change button color to green
          />
      </View>
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
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

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
  },
});

export default TriplePage;
