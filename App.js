

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


import LoginScreen from './screens/login';
import ListingScreen from './screens/listing';



const App= () => {
 

  return (
    <SafeAreaView >
     <Text>hello world</Text>
     <LoginScreen />
     {/* <ListingScreen /> */}
    </SafeAreaView>
  );
};



export default App;
