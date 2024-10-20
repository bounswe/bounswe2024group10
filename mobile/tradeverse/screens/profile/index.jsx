import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import GlobalScreen from "../../components/ui/global-screen";

const ProfileHeader = () => {
  const [activeTab, setActiveTab] = useState("Recent"); // State for tab selection

  return (
    <GlobalScreen>
      <View style={styles.container}>
        <View style={styles.upperBar}>
          <View style={styles.profileInfo}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://iexp.es/congreso/quinto-congreso/wp-content/uploads/2015/04/speaker-1-v2.jpg",
              }} // Replace with actual profile image URL
            />
            <View style={styles.nameSection}>
              <Text style={styles.name}>Gülşen Sabak</Text>
              <Text style={styles.username}>@gulsensabak</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.threeDots}>
            <Text style={styles.dotsText}>⋮</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleBar}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>132k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>230</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabSection}>
          <TouchableOpacity onPress={() => setActiveTab("Recent")}>
            <Text
              style={[styles.tab, activeTab === "Recent" && styles.activeTab]}
            >
              Recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("Popular")}>
            <Text
              style={[styles.tab, activeTab === "Popular" && styles.activeTab]}
            >
              Popular
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GlobalScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  upperBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nameSection: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
    color: "gray",
  },
  threeDots: {
    paddingHorizontal: 10,
  },
  dotsText: {
    fontSize: 24,
    color: "gray",
  },
  middleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  followButton: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  followButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  tab: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6C63FF",
  },
  activeTab: {
    textDecorationLine: "underline",
  },
});

export default ProfileHeader;
