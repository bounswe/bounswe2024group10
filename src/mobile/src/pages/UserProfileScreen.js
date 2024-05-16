import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import mockData from "../constants/mockData";
import styles from "./MyProfile.styles.js";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function UserProfileScreen({ navigation }) {
    const { username, email, personalInfo, avatar, posts } = mockData.userData;
    const [followersCount, setFollowersCount] = useState(mockData.userData.followers);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {
        // Logic to handle follow action
        setIsFollowed(!isFollowed);
        // Increment followers count when user follows
        if (!isFollowed) {
            setFollowersCount(prevCount => prevCount + 1);
        } else {
            setFollowersCount(prevCount => prevCount - 1);
        }
    };

    return(
        <SafeAreaView style={styles.savContainer}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.upperContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={{ uri: avatar }} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View className={styles.infoDivider}>
                            <View style={{alignItems: 'center', width: 200, marginBottom: 5,}}>
                                <Text style={styles.username}>{username}</Text>
                                <Text style={styles.email}>{email}</Text>
                            </View>
                            <View style={styles.followerContainer}>
                                <View style={styles.followers}>
                                    <Text>Followers</Text>
                                    <Text>{followersCount}</Text>
                                </View>
                                {/* Followings count */}
                                <View style={styles.following}>
                                    <Text>Followings</Text>
                                    <Text>{mockData.userData.following}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                <Text style={{fontSize: 18,}}>For other options:</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Triple')}>
                                    <MaterialIcon name="more-horiz" size={30} color="green" />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleFollow} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 18, color: isFollowed ? 'green' : 'blue' }}>{isFollowed ? 'Followed' : 'Follow'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 200,flexDirection: 'column',}}>
                            <Text style={styles.biography}>
                                Description: {personalInfo}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.postPartContainer}>
                    <View style={{ alignItems: 'flex-start' , justifyContent: 'center',height: 100, padding: 20,}}>
                      <Text style={{ textAlign: 'center' , fontSize: 50,}}>Posts</Text>
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
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

            </ScrollView>
            {/* Bottom navigation bar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50, backgroundColor: '#f0f0f0', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <Icon name="plus" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <Icon name="user" size={30} color="green" />
        </TouchableOpacity>
      </View>
        </SafeAreaView>   

    );
    
}


export default UserProfileScreen;
