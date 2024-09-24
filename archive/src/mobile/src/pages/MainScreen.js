import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo and Title Container */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../components/images/logo.png')} // Logo resminizin yolunu buraya ekleyin
          style={styles.logo}
        />
        <Text style={styles.title}>Animal Trove</Text>
      </View>
      <Image
        source={require('../components/images/pandaa.png')} // Panda resminizin yolunu buraya ekleyin
        style={styles.panda}
      />

      {/* Spacer View */}
      <View style={styles.spacer}></View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign-Up')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row', // Yatay düzen için flexDirection ekleniyor
    justifyContent: 'center', // Yatayda merkezlemek için justifyContent ekleniyor
    alignItems: 'center',
    paddingTop: 70,
    
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10, // Logo ile metin arasına bir boşluk bırakmak için marginRight eklendi
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlignVertical : 'top',

  },
  panda: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center', // Panda resmini yatayda merkezlemek için alignSelf ekleniyor
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008000',
  },
});

export default MainScreen;
