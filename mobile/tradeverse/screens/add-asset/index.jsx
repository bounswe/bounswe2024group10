import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import { Stack } from "expo-router";

export default function AddAssetScreen() {
  // Sample list of assets
  const assets = ["BTC", "ETH", "BNB", "ADA", "SOL", "XRP", "BCH"];

  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);

  // Handle input change and filter suggestions
  const handleInputChange = (text) => {
    setInput(text);
    if (text) {
      const filtered = assets.filter((asset) =>
        asset.toLowerCase().startsWith(text.toLowerCase())
      );
      setFilteredAssets(filtered);
    } else {
      setFilteredAssets([]);
    }
  };

  // Handle asset selection
  const handleSelectAsset = (asset) => {
    setInput(asset);
    setFilteredAssets([]); // Hide suggestions once selected
  };

  // Handle Add to Portfolio with platform-specific alert
  const handleAddToPortfolio = () => {

    const alertFunction = Platform.OS === "web" ? window.alert : Alert.alert;

    if (!amount || isNaN(amount)) {
      // Popup alert when amount is not entered or is invalid
      alertFunction(
        "You cannot add without entering a valid amount.",
        "You cannot add without entering a valid amount."
      );
      return;
    }
  };

  return (
    <GlobalScreen>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Add Asset",
        }}
      />
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Add Asset To Your Portfolio</Text>

        {/* Asset Input */}
        <Text style={styles.label}>Asset</Text>
        <TextInput
          style={styles.input}
          value={input}
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
                <Text style={styles.suggestion}>{item}</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#ffffff", // Light background color for suggestion
  },
  button: {
    backgroundColor: "#7b61ff",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
