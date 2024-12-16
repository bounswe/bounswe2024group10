import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { IconCaretDownFilled, IconArrowLeft } from '@tabler/icons-react-native'
import { Stack, useLocalSearchParams, router } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { COLORS, SIZE_CONSTANT, SIZES } from '../../constants/theme'
import { getAssetDetail } from '../../services/asset'
import ContentImage from '../../components/images/content-image'
import ChartView from './_components/ChartView'
import PaddedContainer from '../../components/ui/padded-container'
import DateRange from './_components/DateRange'
import AssetInfoView from './_components/AssetInfoView'
import NewsView from './_components/NewsView'

import FullScrollView from '../../components/ui/full-scroll-view'
import Header from '../../components/ui/header'

const AssetDisplay = () => {
  const [asset, setAsset] = useState(null)
  const [dateRange, setDateRange] = useState({
    label: '1M',
    value: '1M',
  }) // Default date range
  // Currency conversion (for simplicity, using static values)

  const { assetId, symbol, name = '' } = useLocalSearchParams()

  useEffect(() => {
    const res = getAssetDetail({ id: assetId })
    setAsset(res)
  }, [assetId, symbol])

  return (
    <GlobalScreen containerStyle={{ paddingHorizontal: 0 }}>
      <Header title={symbol} />
      <FullScrollView>
        <PaddedContainer style={{ paddingHorizontal: 12 }}>
          <View style={styles.row}>
            <View style={styles.rowInfo}>
              <View>
                <Text style={styles.assetSymbol}>{symbol}</Text>
                <Text style={styles.assetName}>{name}</Text>
              </View>
            </View>
            <DateRange
              dateRange={dateRange}
              onSelect={(r) => {
                setDateRange(r)
              }}
            />
          </View>
        </PaddedContainer>
        <View style={{ width: '100%', height: 190, zIndex: -1 }}>
          <ChartView symbol={symbol} dateRange={dateRange} />
        </View>
        <View style={{ width: '100%', height: 210, zIndex: -1 }}>
          <AssetInfoView symbol={symbol} />
        </View>
        <View style={{ width: '100%', height: 250, zIndex: -1 }}>
          <NewsView symbol={symbol} />
        </View>
        <View style={styles.container}></View>
      </FullScrollView>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 12,
  },
  rowInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    // marginRight: 10,
    borderRadius: 20,
  },
  assetSymbol: {
    fontSize: SIZES.large,
    color: COLORS.primary950,
    fontWeight: '600',
  },
  assetName: {
    fontSize: SIZES.small,
    color: COLORS.primary300,
  },
  assetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  valueText: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: 'bold', // Make text bold
    color: 'purple', // Change text color to purple
  },
  dateRangeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default AssetDisplay
