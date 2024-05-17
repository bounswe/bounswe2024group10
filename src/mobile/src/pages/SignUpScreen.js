import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../components/images/logo.png';
import pandaImage from '../components/images/pandaa.png';
import { useNavigation } from '@react-navigation/native';
import {register} from '../services/auth'
import axios from 'axios';
import ToastAndroid from 'react-native'

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle signup logic here (e.g., API call, validation)
  const navigation = useNavigation();

  const handleSignup = async () => {
      try {
        const response = await register({
          "name": name,
          "userName": username,
          "email": email,
          "password": password
      });
        if (response.success) {
          console.log('Signup  successful:', response.data);
          navigation.navigate('Login');
        }
        if (!response.success) {
          throw new Error(response.message)
        }
      }
      catch (error) {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
      console.log("Signup button clicked");
  };


  const handleContinueAsGuest = () => {
    // Misafir olarak devam et işlemi burada gerçekleştirilebilir
    console.log("Continue as a guest user clicked");
    navigation.navigate('Guest');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>Animal Trove</Text>
      </View>
      <Image source={pandaImage} style={styles.image} />
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContinueAsGuest}>
        <Text style={styles.continueAsGuest}>Continue as a guest user</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingTop: 40, // Header'ı sayfanın en üstüne taşımak için paddingTop eklendi
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color : 'white',
  },
  signupButton: {
    backgroundColor: 'white',
    width: '70%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  signupButtonText: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  continueAsGuest: {
    marginTop: 10,
    color: 'blue',
  },
});

export default SignupScreen;






























