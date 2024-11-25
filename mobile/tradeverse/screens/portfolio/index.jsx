import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { router, Stack } from 'expo-router'
import FullScrollView from '../../components/ui/full-scroll-view'
import GlobalScreen from '../../components/ui/global-screen'
import { COLORS, FONT_WEIGHTS, SIZE_CONSTANT } from '../../constants/theme'
import paths from '../../config/screen-paths'
import { searchAssets } from '../../mock-services/assets'
// Mock Data

const PortfolioScreen = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const data = searchAssets('')
      .slice(0, 5)
      .map((a) => ({ ...a, value: Math.floor(Math.random() * 10000) }))
    setData(data)
  }, [])

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Portfolio',
          }}
        />
        <View style={styles.container}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>My Portfolio</Text>
            <TouchableOpacity
              onPress={() => {
                router.push(paths.PORTFOLIO.ADD_ASSET)
              }}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable Portfolio Block */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {data && (
              <View style={styles.portfolioBlock}>
                {data.map((asset, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.push(
                        `${paths.PORTFOLIO.ASSET_DETAIL}?assetId=${asset.id}`
                      )
                    }}
                    key={index}
                    style={styles.assetBlock}
                  >
                    <Text style={styles.assetName}>{asset.label}</Text>
                    <Text style={styles.assetValue}>{asset.value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </FullScrollView>
    </GlobalScreen>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: COLORS.primary800,
  },
  addButton: {
    backgroundColor: COLORS.primary500,
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  addButtonText: {
    fontSize: SIZE_CONSTANT * 2,
    fontWeight: FONT_WEIGHTS.medium,
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
    borderColor: COLORS.primary50, // Light purple
    borderWidth: 0.5,
    backgroundColor: COLORS.primary100, // Lighter purple
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
    color: COLORS.primary700,
  },

  assetValue: {
    fontSize: 16,
    color: COLORS.primary800,
    alignSelf: 'flex-end',
  },
})

export default PortfolioScreen
