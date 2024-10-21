import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import { IconCaretDown, IconCaretDownFilled } from "@tabler/icons-react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { Stack } from "expo-router";

const AssetDisplay = () => {
  // Asset data for Bitcoin
  const asset = {
    symbol: "BTC",
    name: "Bitcoin",
    valueUSD: 64900,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  };

  // State to store selected currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Currency conversion (for simplicity, using static values)
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.74,
  };

  const assetValue = (asset.valueUSD * currencyRates[selectedCurrency]).toFixed(
    0
  ); // No decimal places

  return (
    <GlobalScreen>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Asset Detail",
        }}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={{ uri: asset.logo }} style={styles.logo} />
          <Text style={styles.assetText}>{asset.symbol}</Text>
          <View style={styles.assetInfo}>
            <Text style={styles.valueText}>{assetValue}</Text>
            <Text style={{ fontSize: SIZES.large }}>$</Text>
            <IconCaretDownFilled
              color={COLORS.primary950}
              stroke={0}
              fill={COLORS.primary950}
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://www.coindesk.com/resizer/jhtQy7_2CSK7MAVOQepiGMIhbHg=/1056x388/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LYMAFPEBHVD7FCUMGEB4B565LU.jpeg",
            }}
            style={styles.graphImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </GlobalScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  assetText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  assetInfo: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  valueText: {
    fontSize: 24,
    marginRight: 10,
    fontWeight: "bold", // Make text bold
    color: "purple", // Change text color to purple
  },
  pickerContainer: {
    backgroundColor: "#000000", // Updated to a consistent green color
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 40, // Adjusted the width to provide more space for currency options
    justifyContent: "center",
  },
  picker: {
    height: 40,
    width: "100%",
    color: "#000", // Text color white for contrast on green background
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  graphImage: {
    width: "100%",
    height: 300,
  },
});

export default AssetDisplay;
