import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native'
import { router, Stack } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { addAsset } from '../../services/portfolio'
import AuthContext from '../../../tradeverse/auth/context/auth-context'
import { useDispatch } from 'react-redux'
import { showToast } from '../../reduxStore/ui-slice'
import AutoSuggestInput from './_components/AssetSuggestion'
import { SIZES } from '../../constants/theme'

export default function AddAssetScreen() {
  // Sample list of assets
  const [asset, setAsset] = useState('')
  const [amount, setAmount] = useState('')
  const [filteredAssets, setFilteredAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()

  const handleAddToPortfolio = async () => {
    if (!asset || !amount) {
      Alert.alert('Error', 'Please enter asset and amount')
      return
    }
    const res = await addAsset({
      username: user?.username,
      assetId: asset?.id,
      amount,
    })
    if (res.successful) {
      dispatch(showToast({ text: res?.message }))
      router.back()
    }
    console.log(res)
  }

  return (
    <GlobalScreen>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Add Asset',
        }}
      />
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Add Asset To Your Portfolio</Text>

        {/* Asset Input */}

        <Text style={styles.label}>Asset</Text>
        <AutoSuggestInput
          onSelect={(asset) => {
            setAsset(asset)
          }}
        />

        {/* Amount Input */}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* Add to Portfolio Button */}
        <TouchableOpacity style={styles.button} onPress={handleAddToPortfolio}>
          <Text style={styles.buttonText}>Add To Portfolio</Text>
        </TouchableOpacity>
      </View>
    </GlobalScreen>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: SIZES.xSmall,
    color: '#3C3B3B',
    marginBottom: 5,
  },
  input: {
    height: 48,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff', // Light background color for suggestion
  },
  button: {
    backgroundColor: '#7b61ff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
