import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GlobalScreen from '../../components/ui/global-screen';
import FullScrollView from '../../components/ui/full-scroll-view';
import { Stack } from 'expo-router';
import api from '../../services/_axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FollowersScreen = () => {
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                const response = await api.get('/api/follow/get-followers', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setFollowers(response.data.followers || []);
            } catch (error) {
                console.error('Error fetching followers:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFollowers();
    }, []);

    return (
        <GlobalScreen>
            <FullScrollView>
                <Stack.Screen
                    options={{
                        headerBackTitleVisible: false,
                        headerTitle: 'Followers',
                    }}
                />
                {loading ? (
                    <Text style={styles.loadingText}>Loading followers...</Text>
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.countText}>
                            Followers Count: {followers.length}
                        </Text>
                        {followers.map((follower, index) => (
                            <View key={index} style={styles.followerItem}>
                                <Image
                                    source={{ uri: follower.userPhoto }}
                                    style={styles.userPhoto}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.username}>
                                        {follower.username}
                                    </Text>
                                    <Text style={styles.name}>
                                        {follower.name}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </FullScrollView>
        </GlobalScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    countText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    loadingText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    followerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
    },
    name: {
        fontSize: 14,
        color: '#555',
    },
});

export default FollowersScreen;
