import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import PostCard from "../_components/post-card";
import api from "../../../services/_axios";
import { Storage } from "../../../util/storage";

export default function ForYouView({ data }) {
  // State to manage API data, loading state, and errors
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    const authToken = await Storage.getItem('authToken')
    try {
      const response = await api.get('/api/post/search-posts/?', {headers: {Authorization: 'Bearer ' + authToken}});
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setError("Failed to load posts.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  // // Loading and error handling UI
  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text style={{ color: 'red' }}>{error}</Text>
  //     </View>
  //   );
  // } 

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Render the list of posts */}
      {(data || posts).map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </View>
  )
}
