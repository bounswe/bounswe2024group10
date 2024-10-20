import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const FollowedTagsScreen = () => {
  const followedTags = [
    { id: '1', name: 'Investing', followers: 1500 },
    { id: '2', name: 'Stock Market', followers: 2000 },
    { id: '3', name: 'Personal Finance', followers: 1200 },
    { id: '4', name: 'Cryptocurrency', followers: 1800 },
    { id: '5', name: 'Financial Literacy', followers: 800 },
    { id: '6', name: 'Budgeting', followers: 1600 },
    { id: '7', name: 'Retirement Planning', followers: 900 },
    { id: '8', name: 'Wealth Management', followers: 1300 },
    { id: '9', name: 'Real Estate Investing', followers: 1700 },
    { id: '10', name: 'Debt Management', followers: 1100 },
    { id: '11', name: 'Passive Income', followers: 1400 },
    { id: '12', name: 'Credit Score', followers: 700 },
    { id: '13', name: 'Tax Planning', followers: 1000 },
    { id: '14', name: 'Financial Independence', followers: 850 },
    { id: '15', name: 'Investment Strategies', followers: 950 },
    { id: '16', name: 'Mutual Funds', followers: 750 },
    { id: '17', name: 'Forex Trading', followers: 1300 },
    { id: '18', name: 'Insurance', followers: 600 },
    { id: '19', name: 'Expense Tracking', followers: 1100 },
    { id: '20', name: 'Economic Trends', followers: 1200 },
  ];

  const renderTagItem = ({ item }) => (
    <TouchableOpacity style={styles.tagBox}>
      <Text style={styles.tagName}>{item.name}</Text>
      <Text style={styles.tagFollowers}>{item.followers} Followers</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header showing number of followed tags */}
      <Text style={styles.header}>
        You are following {followedTags.length} topics
      </Text>

      {/* List of followed tags */}
      <FlatList
        data={followedTags}
        renderItem={renderTagItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.tagList}
      />

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        {/* Home Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => console.log('Home Pressed')}>
          <Ionicons name="home-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Search Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => console.log('Search Pressed')}>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Create (Active) Button */}
        <TouchableOpacity style={styles.activeButton} onPress={() => console.log('Create Pressed')}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Notifications Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => console.log('Notifications Pressed')}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity style={styles.navButton} onPress={() => console.log('Profile Pressed')}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tagList: {
    paddingBottom: 60, // Extra padding for the bottom nav bar
  },
  tagBox: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2, // Adds shadow effect
    alignItems: 'center',
    borderWidth: 1, // Add a border around the box
    borderColor: '#EAEAEA', // Border color
  },
  tagName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tagFollowers: {
    fontSize: 14,
    color: '#777',
  },
  bottomNav: {
    position: 'absolute', // Position at the bottom of the screen
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4B49F5', // Main background color of the nav bar
    height: 60, // Height of the navigation bar
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA', // Adds a border on top of the nav bar for separation
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rounded button
    backgroundColor: '#624BF6', // Different color for the active button
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FollowedTagsScreen;
