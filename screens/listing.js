import React, {useEffect, useState} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Alert,
    Image
  } from 'react-native';
 import axios from "axios";
 import List from "../componenet/list"
  const ListingScreen = () => {
    const Result =  axios.get("https://pfe-react-native.vercel.app/api/pfe-2021");
      const [list, setList] = useState('')
      setList(Result.data.token)
      console.log(list)

    return(
        <View>
      <FlatList
        data = {list}
        renderItem = {({item}) => ( <List
          item = {item}
          
        
        />)}
        onRefresh={refetch}
        refreshing={refreshing}
        
        /> 
        </View>
    )
  }
  export default ListingScreen;
