import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import SettingsScreen from './pages/SettingsScreen';
import SearchB from './pages/SearchB' ;
import GuestSearch from './pages/GuestSearch' ;
import MainScreen from './pages/MainScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignUpScreen';
import TripleScreen from './pages/TripleScreen';
import GuestUserHome from './pages/GuestUserHome';
import Post from './pages/Post';
import MyProfile from './pages/MyProfile';
import SearchResults from './pages/SearchResults';
import UserProfileScreen from './pages/UserProfileScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name = "Main" component={MainScreen} />
        <Stack.Screen name = "Login" component={LoginScreen} />
        <Stack.Screen name = "Guest" component={GuestUserHome}  options={{ headerLeft: null }} />
        <Stack.Screen name = "Sign-Up" component={SignupScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: null }} />
        <Stack.Screen name="Triple" component={TripleScreen} />
        <Stack.Screen name="GuestS" component={GuestSearch} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name = "Settings" component={SettingsScreen}/>
        <Stack.Screen name = "Search" component={SearchB}  options={{ headerLeft: null }} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="UserP" component={UserProfileScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;