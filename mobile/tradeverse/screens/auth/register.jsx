import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const RegisterScreen = () => (
  <View style={styles.container}>
    {/* Logo */}
    <Text style={styles.logo}>Tradeverse</Text>

    {/* Email Input */}
    <TextInput
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="#AAA"
    />

    {/* Name Input */}
    <TextInput
      style={styles.input}
      placeholder="Name"
      placeholderTextColor="#AAA"
    />

    {/* Surname Input */}
    <TextInput
      style={styles.input}
      placeholder="Surname"
      placeholderTextColor="#AAA"
    />

    {/* Password Input */}
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#AAA"
    />

    {/* Sign-up Button */}
    <TouchableOpacity style={styles.signUpButton}>
      <Text style={styles.signUpButtonText}>Sign Up</Text>
    </TouchableOpacity>

    {/* Already have an account - Sign In */}
    <TouchableOpacity>
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#624BF6',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  signUpButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#624BF6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#624BF6',
    fontSize: 16,
    marginTop: 20,
  },
  signInLink: {
    fontWeight: 'bold',
  },
})

export default RegisterScreen
