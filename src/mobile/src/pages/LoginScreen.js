import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import pandaImage from '../components/images/pandaa.png';
import logo from '../components/images/logo.png';
import {login} from '../services/auth.js';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const handleLogin = async (navigation, userName, password) => {
    try {
    const response = await login({ userName, password });

    if (response.success) {
            const { token, userName } = response;

            await AsyncStorage.setItem('authToken', token);
            await AsyncStorage.setItem('userName', userName);

            navigation.navigate('Home');
          } else {
            console.error(response.message);
          }

    }
    catch (error) {
      console.error('Login error:', error);
    }
    // Giriş işlemi burada gerçekleştirilebilir
    console.log("Login button clicked");
    //navigation.navigate('Home');

};

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fill in this part
  const navigation = useNavigation();
  const handleForgotPassword = () => {
    // Do not fill in this part
    console.log("Forgot Password");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>Animal Trove</Text>
      </View>
      <Image
        source={pandaImage}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin(navigation, username, password)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>I Forgot My Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 20,
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
  image: {
    width: 200,
    height: 200,
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
  loginButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    width: 230,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: 'blue',
  },
});

export default LoginScreen;
