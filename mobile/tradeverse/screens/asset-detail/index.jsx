import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import GlobalScreen from "../../components/ui/global-screen";
import { IconCaretDown, IconCaretDownFilled } from "@tabler/icons-react-native";
import { COLORS, SIZE_CONSTANT, SIZES } from "../../constants/theme";
import { Stack, useLocalSearchParams } from "expo-router";
import { getAssetById } from "../../mock-services/assets";
import ContentImage from "../../components/images/content-image";

const AssetDisplay = () => {
  // State to store selected currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const [asset, setAsset] = useState(null);
  // Currency conversion (for simplicity, using static values)
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.74,
  };

  const { assetId } = useLocalSearchParams();

  useEffect(() => {
    console.log('====================================');
    console.log('====================================');
    const res = getAssetById(assetId);
    console.log('====================================');
    console.log('====================================');
    setAsset({...res,value: Math.floor(Math.random() * 10000)});
  }, [assetId]);

  return (
    <GlobalScreen>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Asset Detail",
        }}
      />
      <View style={styles.container}>
        {asset && (
          <>
            <View style={styles.row}>
              <ContentImage style={styles.logo} />
              <Text style={styles.assetText}>{asset.label}</Text>
              <View style={styles.assetInfo}>
                <Text style={styles.valueText}>{asset.value}</Text>
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
          </>
        )}
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
    borderRadius: 20,
  },
  assetText: {
    fontSize:SIZE_CONSTANT * 2.4,
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
