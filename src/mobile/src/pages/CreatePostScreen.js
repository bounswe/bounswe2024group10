import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert, Image } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from expo
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CreatePost = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setDate(formattedDate);
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {

      return;
    }
    console.log(pickerResult);
    setSelectedImage(pickerResult.assets[0]); // Store the whole object returned by ImagePicker
  };1

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: 'image/jpeg', // Adjust the type according to the image type
        name: 'photo.jpg',
      });
      formData.append('name', name);
      formData.append('location', location);
      formData.append('date', date);
      formData.append('caption', caption);

      const response = await axios.post('BACKEND_POST_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Post created:', response.data);
      // You can show a success message or navigate to another screen here
    } catch (error) {
      console.error('Error creating post:', error);
      // You can show an error message here
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={{ uri: selectedImage.uri }} style={styles.image} />}
      <TouchableOpacity style={styles.postButton} onPress={pickImage}>
        <Text style={styles.postButtonText}>Select Image</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text>{date ? date : 'Date'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        style={styles.captionInput}
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
      />
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#7FFF7F',
    borderWidth: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  captionInput: {
    height: 80,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  postButton: {
    backgroundColor: '#7FFF7F',
    width: '70%',
    paddingVertical: 10,
    borderRadius: 5,
  },
  postButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    
  },
});

export default CreatePost;
