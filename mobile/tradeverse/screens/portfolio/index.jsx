import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import { router } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { COLORS, FONT_WEIGHTS, SIZE_CONSTANT } from '../../constants/theme'
import paths from '../../config/screen-paths'
import { getPortfolio } from '../../services/portfolio'
import AuthContext from '../../auth/context/auth-context'
import AssetCard from './_components/asset-card'
// Mock Data

const PortfolioScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshCount, setRefreshCount] = useState(0)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true)
        const response = await getPortfolio({ username: user?.username })
        setLoading(false)
        setData(response)
      } catch (error) {}
    }
    fetchPortfolio()
    setLoading(false)
  }, [refreshCount])

  return (
    <GlobalScreen>
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
      {loading && (
        <View
          style={{
            marginTop: 24,
          }}
        >
          <ActivityIndicator size="small" color={COLORS.primary500} />
        </View>
      )}
      {!loading && data && (
        <>
          <View
            style={{
              marginTop: 8,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              ${data?.totalValue?.toFixed(2)}
            </Text>
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => {
                  setRefreshCount(refreshCount + 1)
                }}
              />
            }
          >
            <View style={styles.container}>
              {/* Scrollable Portfolio Block */}
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {loading ? (
                  <ActivityIndicator size="large" color={COLORS.primary500} />
                ) : null}
                {data && (
                  <View style={styles.portfolioBlock}>
                    {data?.portfolios &&
                      data.portfolios.map((asset, index) => (
                        <AssetCard key={asset.id} asset={asset} />
                      ))}
                  </View>
                )}
              </ScrollView>
            </View>
          </ScrollView>
        </>
      )}
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
    // marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary800,
  },
  addButton: {
    backgroundColor: COLORS.primary500,
    width: 48,
    // height: 48,
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
