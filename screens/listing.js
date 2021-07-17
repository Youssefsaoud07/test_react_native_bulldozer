import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
} from 'react-native';
import axios from "axios";
import List from "../componenet/list"
import Ionicons from 'react-native-vector-icons/Ionicons';
const ListingScreen = () => {


    const [list, setList] = useState('')
    const getrequest = async () => {


        const Result = await axios.get("https://pfe-react-native.vercel.app/api/pfe-2021");
        setList(Result.data)
    }
    useEffect(() => {
        getrequest()

    }, [])


    console.log(list)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="reorder-three" size={40} />
                <Text style={{ fontSize: 25, fontWeight: 'bold' }} >Images</Text>

                <Ionicons name="search" size={30} style={{ marginRight: 10 }} />
            </View>


            <View >
                <FlatList
                    data={list}
                    renderItem={({ item }) => (<List
                        item={item}


                    />)}


                />
            </View>

        </SafeAreaView>
    )
}
export default ListingScreen;
const styles = StyleSheet.create({
    container: {



        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#f9fafe'

    },
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,

        backgroundColor: '#fff'


    }
})
