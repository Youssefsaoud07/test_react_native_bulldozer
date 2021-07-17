import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput
  } from 'react-native';
  
  const LoginScreen = () => {




  
  return (
  <View style={styles.container}>
<View>
  <Text style={{color:'blue',fontWeight:'bold',fontSize:24}}
    
  >Bienvenue</Text>
  <Text style={{color:'grey'}}style={styles.text}>Heureux de vous voir. Vous pouvez continuer a vous
    contacter pour gerer vos feuilles de depense personelles.
  </Text>
  <TouchableOpacity style={{borderRadius:30 ,elevation:3,backgroundColor:'#fff',padding:20,alignItems:'center'}}>
    <View >
      
      <Text style={{color:'grey'} }>se connecter avec google</Text>
      
    </View>
  </TouchableOpacity>
  {/* <SocialButton
            buttonTitle="se connecter avec google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
           
          /> */}
  <View style={{alignItems:'center',paddingTop:20}}>
    
  <Text style={{color:'grey'}}>Ou connectez-vous par email</Text>
  </View>
  <View>
  <TextInput style={{height:40,margin:12 ,borderRadius:30,backgroundColor:'#F7F6F6'}}
  placeholder='votre email'
  />
  <TextInput style={{height:40,margin:12 ,borderRadius:30,backgroundColor:'#F7F6F6'}}
  placeholder='votre mot de passe'
  />
  </View>
  <Text style={{color:'blue'}}>mot de passe oublié?</Text>
  <TouchableOpacity style={{borderRadius:30 ,elevation:3,backgroundColor:'blue',padding:20,alignItems:'center',marginTop:30}}>
    <View >
      
      <Text style={{color:'#fff'} }>se connecter</Text>
      
    </View>
  </TouchableOpacity>
  <View style={{paddingTop:120}}> 
  <Text style={{color:'grey'}}>vous n'etes pas encore inscrit?</Text> 
  <Text style={{color:'pink'}} >inscrivez-vous</Text>
  </View>
</View>
  </View>
  )
  }
  export default LoginScreen
  const styles = StyleSheet.create({
    container: {
      
      backgroundColor:'#fff',
      top: 25,
      left: 25,
      width: 375,
      height: 812,
    },
    logo: {
      height: 100,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 16,
      marginBottom: 25,
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
    errorText :{
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 14,
      color:'red'
    }
  });


