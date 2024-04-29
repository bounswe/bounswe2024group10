import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import mockData from "../constants/mockData";
import styles from "./MyProfile.styles.js";
import Icon from "react-native-vector-icons/FontAwesome";


function MyProfile({ navigation }) {
    const { username, email, personalInfo, avatar, posts, followers, following } =
    mockData.userData;

    return(
        <SafeAreaView style={styles.savContainer}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.upperContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={{ uri: avatar }} />

                    </View>
                    <View style={styles.infoContainer}>
                        <View className={styles.infoDivider}>
                            <View style={{alignItems: 'center', width: 200,}}>
                                <Text className={styles.username}>{username}</Text>
                                <Text className={styles.email}>{email}</Text>
                            </View>
                            <View style={styles.followerContainer}>
                                <Text className={styles.followers}>
                                    {followers} Followers
                                </Text>
                                <Text className={styles.followers}>
                                    {following} Followings
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.settingsButtonContainer}>
                                <Text>Settings </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 200,}}>
                            <Text className={styles.biography}>{personalInfo}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.postPartContainer}>
                    <View style={{ alignItems: 'flex-start' , justifyContent: 'center',height: 100, padding: 20,}}>
                      <Text style={{ textAlign: 'center' , fontSize: 50,}}>My Posts</Text>
                    </View>
                    <View style={styles.myPostsContainer}>
                        {posts.map((post) => (
                            <View key={post.id} style={styles.postCard}>
                                <Image source={{ uri: post.image }} style={styles.postImage} />
                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Icon name="thumbs-up" size={30} color="green" style={{marginRight: 10,marginLeft: 10}}/>
                                    </TouchableOpacity>
                                    <Text style={{marginRight: 10}}>{post.likes}</Text>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Icon name="thumbs-down" size={30} color="red" style={{marginRight: 10}}/>
                                    </TouchableOpacity>
                                    <Text style={{ marginRight: 170 }}>{post.dislikes}</Text>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Icon name="bookmark" size={30} color="pink" style={{marginRight: 10}}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => 0}>
                                        <Icon name="flag" size={30} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MyProfile;

