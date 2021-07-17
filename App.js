

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import LoginScreen from './screens/login';
import ListingScreen from './screens/listing';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {createStackNavigator} from '@react-navigation/stack';

GoogleSignin.configure({
  webClientId:
  "498604991167-e2g0ufvfc017451gipuftj3p6jakivee.apps.googleusercontent.com",
});


const App= () => {
  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      >
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Listing" component={ListingScreen} />
      </Stack.Navigator>
      </NavigationContainer>
     
    //  {/* <Text>hello world</Text> */}
    //  {/* <LoginScreen /> */}
    //  {/* <ListingScreen /> */}
    
  );
};



export default App;
