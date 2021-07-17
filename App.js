

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



const App= () => {
 

  return (
    <SafeAreaView >
     <Text>hello world</Text>
     <LoginScreen />
    </SafeAreaView>
  );
};



export default App;
