import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native'
import { router, Stack } from 'expo-router'
import GlobalScreen from '../../components/ui/global-screen'
import { addAsset, getAllAssets } from '../../services/portfolio'
import AuthContext from '../../../tradeverse/auth/context/auth-context'
import { useDispatch } from 'react-redux'
import { showToast } from '../../reduxStore/ui-slice'

export default function AddAssetScreen() {
  // Sample list of assets
  const [allAssets, setAllAssets] = useState([])
  const [input, setInput] = useState('')
  const [amount, setAmount] = useState('')
  const [filteredAssets, setFilteredAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllAssets = async () => {
      try {
        setLoading(true)
        const response = await getAllAssets()
        setAllAssets(response)
      } catch (error) {
        console.error('Get Portfolio failed', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAllAssets()
  }, [])

  // Handle input change and filter suggestions
  const handleInputChange = (text) => {
    setInput(text)
    if (text) {
      const filtered = allAssets.filter(
        (asset) =>
          asset.name.toLowerCase().startsWith(text.toLowerCase()) ||
          asset.tradingViewSymbol.toLowerCase().startsWith(text.toLowerCase())
      )

      setFilteredAssets(filtered)
    } else {
      setFilteredAssets([])
    }
  }

  // Handle asset selection
  const handleSelectAsset = (asset) => {
    setInput(asset)
    setFilteredAssets([]) // Hide suggestions once selected
  }

  const handleAddToPortfolio = async () => {
    if (!input || !amount) {
      Alert.alert('Error', 'Please enter asset and amount')
      return
    }
    const res = await addAsset({
      username: user?.username,
      assetId: input?.id,
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
        <TextInput
          style={styles.input}
          value={input.yahooFinanceSymbol}
          onChangeText={handleInputChange}
          placeholder="Enter asset"
        />

        {/* Display suggestions */}
        {filteredAssets.length > 0 && (
          <FlatList
            data={filteredAssets}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectAsset(item)}>
                <Text style={styles.suggestion}>{item.yahooFinanceSymbol}</Text>
              </TouchableOpacity>
            )}
          />
        )}

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
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
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
