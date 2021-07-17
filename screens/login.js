import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
 
  StyleSheet,
  
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  GoogleSignin,
  
  statusCodes,
} from '@react-native-google-signin/google-signin';


const LoginScreen = ({ navigation }) => {


  signIn = async () => {
    console.log('sgsfg')
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
      } else {
        console.log(error)
      }
    }
  };
  const googleS = () => {
    signIn()
    navigation.navigate('Listing')
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: '#3c51c9', fontWeight: 'bold', fontSize: 24 }}

        >Bienvenue</Text>
        <Text style={{ color: 'grey' }} style={styles.text}>Heureux de vous voir. Vous pouvez continuer a vous
          contacter pour gerer vos feuilles de depense personelles.
        </Text>
        <TouchableOpacity onPress={() => googleS()} style={{ borderRadius: 30, elevation: 3, backgroundColor: '#fff', justifyContent: 'center', padding: 10, marginBottom: 40, alignItems: 'center', flexDirection: 'row' }}>

          <Ionicons name="md-logo-google" size={30} style={{ marginRight: 10 }} />
          {/* <Image source={{uri :'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'} } /> */}
          <Text style={{ color: 'grey' }}>se connecter avec google</Text>


        </TouchableOpacity>

        <View style={{ alignItems: 'center', paddingTop: 20 }}>

          <Text style={{ color: 'grey', marginBottom: 10 }}>Ou connectez-vous par email</Text>
        </View>
        <View>
          <TextInput style={{ padding: 15, borderRadius: 30, backgroundColor: '#f3f5f8' }}
            placeholder='votre email'
          />
          <TextInput secureTextEntry={true} style={{ padding: 15, marginTop: 10, borderRadius: 30, backgroundColor: '#f3f5f8' }}
            placeholder='votre mot de passe'
          />
        </View>
        <Text style={{ color: 'black', marginBottom: 30, marginTop: 10 }}>mot de passe oublié?</Text>
        <TouchableOpacity style={{ borderRadius: 30, elevation: 3, backgroundColor: 'blue', padding: 20, alignItems: 'center', marginTop: 30 }}>
          <View >

            <Text style={{ color: '#fff' }}>se connecter</Text>

          </View>
        </TouchableOpacity>
        <View style={{ paddingTop: 70, flexDirection: 'row' }}>
          <Text style={{ color: 'grey', fontWeight: 'bold', paddingRight: 4 }}>vous n'etes pas encore inscrit?</Text>
          <Text style={{ color: '#fda5c5', fontWeight: 'bold' }} >inscrivez-vous</Text>
        </View>
      </View>
    </View>
  )
}
export default LoginScreen
const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

    margin: 10,
    width: 375,
    height: 812,
    padding: 20
  },
  logo: {
    height: 100,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 16,
    marginBottom: 50,
    color: 'grey',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  errorText: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 14,
    color: 'red'
  }
});


