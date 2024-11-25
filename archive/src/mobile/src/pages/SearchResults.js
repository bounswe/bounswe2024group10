import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { search } from "./../services/search.js";
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ResultBox = ({ animal }) => (
  <View style={styles.resultContainer}>
    <View style={styles.animalCard}>
      <Image source={{ uri: animal?.pic }} style={styles.animalImage} />
      <View style={styles.subInfo}>
        <Text style={styles.mainLabel}>{animal?.mainLabel}</Text>
        <Text style={styles.name}>{animal?.name}</Text>
        <Text style={styles.info}>Speed: {animal?.speed ?? "N/A"}</Text>
        <Text style={styles.info}>
          Conservation Status: {animal?.conservationStatus ?? "N/A"}
        </Text>
        <Text style={styles.info}>Diel cycle: {animal?.cycle ?? "N/A"}</Text>
      </View>
    </View>
  </View>
);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "5foısdjpfjsdpjfsdojfpjıojpsjdı2",
    title: "Fourth Item",
  },
  {
    id: "fnsdofjsdojfdsofşosjkfpodsn",
    title: "Fifth Item",
  },
  {
    id: "fnsfjajdddddddddfpodsn",
    title: "Sixth Item",
  },
  {
    id: "fnsağdccccccccccccccccccccvpodsn",
    title: "Seventh Item",
  },
  {
    id: "fnsağdşağsşdsalğcdlsağpodsn",
    title: "Eighth Item",
  },
];

const LoadingScreen = () => (
  //<View style={styles.loadingContainer}>
  //  <Text style={styles.container}>Loading...</Text>
  //</View>
  <Item title={"Loading..."} />
);

const SearchResults = () => {
  // Use the useRoute hook to access the route object
  const route = useRoute();
  const { searchQuery } = route.params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await search({ searchTerm: searchQuery });
      console.log(data);
      setData(data.animalInfoSearch);
    } catch (error) {
      console.log("catch");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data ?? []}
        renderItem={({ item }) => <ResultBox animal={item} />}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "green",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  loadingContainer: {
    backgroundColor: "red",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  animalCard: {
    marginTop: 48,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgb(252, 252, 252)",
    padding: 12,
    cursor: "pointer",
  },
  animalImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  subInfo: {
    flexDirection: "column",
    gap: 8,
  },
  name: {
    fontSize: 14,
    opacity: 0.7,
  },
});

export default SearchResults;
