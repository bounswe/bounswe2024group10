import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FullScrollView from "../../components/ui/full-scroll-view";
import GlobalScreen from "../../components/ui/global-screen";
import { SIZE_CONSTANT } from "../../constants/theme";
import { router, Stack } from "expo-router";
import paths from "../../config/screen-paths";
import { searchAssets } from "../../mock-services/assets";
// Mock Data

const PortfolioScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = searchAssets("")
      .slice(0, 5)
      .map((a) => ({ ...a, value: Math.floor(Math.random() * 10000) }));
    setData(data);
  }, []);

  return (
    <GlobalScreen>
      <FullScrollView>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: "Portfolio",
          }}
        />
        <View style={styles.container}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>My Portfolio</Text>
            <TouchableOpacity
              onPress={() => {
                router.push(paths.PORTFOLIO.ADD_ASSET);
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
                        paths.PORTFOLIO.ASSET_DETAIL + `?assetId=${asset.id}`
                      );
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
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A148C", // Dark purple
  },
  addButton: {
    backgroundColor: "#7B1FA2", // Medium purple
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },

  addButtonText: {
    fontSize: SIZE_CONSTANT * 2,
    color: "#FFFFFF", // White text
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  portfolioBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  assetBlock: {
    backgroundColor: "#D1C4E9", // Lighter purple
    width: "48%",
    height: 100,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  assetName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A148C", // Dark purple for text
  },
  assetValue: {
    fontSize: 16,
    color: "#7B1FA2", // Medium purple for value
    alignSelf: "flex-end",
  },
});

export default PortfolioScreen;
