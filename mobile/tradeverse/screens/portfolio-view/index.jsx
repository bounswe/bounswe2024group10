import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// Mock Data
const portfolioData = [
  { name: 'BTC', value: '0.005' },
  { name: 'USD', value: '$31.82' },
  { name: 'EUR', value: '€52.96' },
  { name: 'JPY', value: '¥4000.50' },
  { name: 'BTC', value: '0.005' },
  { name: 'USD', value: '$31.82' },
  { name: 'EUR', value: '€52.96' },
  { name: 'JPY', value: '¥4000.50' },
  { name: 'BTC', value: '0.005' },
  { name: 'USD', value: '$31.82' },
  { name: 'EUR', value: '€52.96' },
  { name: 'JPY', value: '¥4000.50' },
  { name: 'BTC', value: '0.005' },
  { name: 'USD', value: '$31.82' },
  { name: 'EUR', value: '€52.96' },
  { name: 'JPY', value: '¥4000.50' },
  // You can add more assets as needed
];

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>

      {/* Title Block */}
      <View style={styles.titleBlock}>
        <Text style={styles.title}>My Portfolio</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Portfolio Block */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.portfolioBlock}>
          {portfolioData.map((asset, index) => (
            <TouchableOpacity key={index} style={styles.assetBlock}>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetValue}>{asset.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6', // Light purple background
    padding: 20,
  },
  titleBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C', // Dark purple
  },
  addButton: {
    backgroundColor: '#7B1FA2', // Medium purple
    padding: 10,
    borderRadius: 25,
  },
  addButtonText: {
    fontSize: 18,
    color: '#FFFFFF', // White text
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  portfolioBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  assetBlock: {
    backgroundColor: '#D1C4E9', // Lighter purple
    width: '48%',
    height: 100,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  assetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C', // Dark purple for text
  },
  assetValue: {
    fontSize: 16,
    color: '#7B1FA2', // Medium purple for value
    alignSelf: 'flex-end',
  },
});

export default PortfolioScreen;
