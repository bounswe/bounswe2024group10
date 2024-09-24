import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import mockData from "../constants/mockData";
import styles from "./Post.styles";
import Icon from "react-native-vector-icons/FontAwesome";



function Post({ navigation }) {
  const post = mockData.posts[0];
  const user = post.owner;

  return (
  <View style={[styles.container,{flexDirection: 'column',},]}>
      <View style={[styles.upContainer,{flexDirection: 'row',},]}>
          <Image
              source={require("../components/images/logo.png")}
              className={styles.userAvatar}
          />
          <Text className={styles.userName}>{user.username}</Text>
      </View>
      <SafeAreaView style={[styles.savContainer,{flexDirection: 'row',},]}>
          <ScrollView style={styles.scrollView}>
              <Image
                  source={{uri: post.image}}
                  style={[styles.postImage,{height: 300, width: 300,},]}
              />
              <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={() => 0}>
                      <Icon name="thumbs-up" size={30} color="green" style={{marginRight: 10,marginLeft: 10}}/>
                  </TouchableOpacity>
                  <Text style={{marginRight: 10}}>{post.likes}</Text>
                  <TouchableOpacity onPress={() => 0}>
                      <Icon name="thumbs-down" size={30} color="red" style={{marginRight: 10}}/>
                  </TouchableOpacity>
                  <Text style={{ marginRight: 150 }}>{post.dislikes}</Text>
                  <TouchableOpacity onPress={() => 0}>
                      <Icon name="bookmark" size={30} color="pink" style={{marginRight: 10}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => 0}>
                      <Icon name="flag" size={30} color="red" />
                  </TouchableOpacity>
              </View>
              <Text style={styles.descriptionText}>
                  <Text> {post.name}</Text> {"\n"}
                  <Text> {post.location}</Text> {"\n"}
                  <Text> {post.date}</Text> {"\n"}
                  <Text> {post.description}</Text>
              </Text>
              <View style={styles.comments}>
                  <Text style={{ textAlign: "center" , fontSize: 31}}>Comments</Text>
                  {mockData.posts.map((post) => (
                    <View style={styles.commentItem} key={post.id}>
                      {post.commentDetails.map((comment) => (
                        <View key={comment.id}>
                          <Image
                            source={{ uri: comment.owner.avatar }}
                            style={styles.commentAvatar}
                          />
                          <Text style={styles.commentName}>
                            {comment.owner.username}
                          </Text>
                          
                          <View style={styles.commentBody}>
                            <Text style={styles.commentText}>{comment.comment}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  ))}

                  <View style={styles.newCommentBox}>
                      {/* Add form elements for new comment here */}
                      <TextInput placeholder="Write a comment..." style={styles.newCommentInput} multiline={true}/>
                      <TouchableOpacity style={styles.newCommentButton}
                      onPress={() => console.log("Comment button pressed")}>
                          <Text style={{ color: 'white' }}>Comment</Text>
                      </TouchableOpacity>
                  </View>


              </View>
          </ScrollView>
      </SafeAreaView>
  </View>
  );
}

export default Post;

