import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'


const List = (item) => {

    return (
        <View style={styles.container}>
            <View style={styles.headPost} >

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'grey' }}>Réference:</Text>
                    <Text style={{ color: '#4155ca', fontWeight: 'bold' }}>  {item.item.reference}</Text>
                </View>
                <View style={{ backgroundColor: item.item.status === 'approved' ? '#FC7070' : (item.item.status === 'declined' ? '#38D643' : '#FFD741'), color: '#fff', width: 100, borderRadius: 10, alignContent: 'flex-end' }}>
                    <Text style={{ color: '#fff', padding: 7, width: 100, borderRadius: 10, textAlign: 'center', alignItems: 'flex-end' }}>
                        {item.item.status === 'approved' ? 'valider' : (item.item.status === 'Declined' ? 'Rejeter' : 'en attent')}</Text>
                </View>
            </View>
            <View style={styles.MPost} >


                <Text style={{ color: 'grey', marginRight: 5, fontSize: 14 }}>libellé:</Text>
                <Text style={{ color: 'gray', fontSize: 14, fontWeight: 'bold' }}>{item.item.label}</Text>
            </View>

            <View style={styles.bottomP}>
                <View>
                    <Text style={{ color: 'grey', fontSize: 14 }}>Date: </Text>
                    <Text>{moment(item.item.date).format('DD/MM/YYYY')}</Text>
                </View>
                <View>
                    <Text style={{ color: 'grey', fontSize: 14 }}>Montant:</Text>
                    <Text>{item.item.amount}</Text>
                </View>
            </View>


        </View>
    )
}
export default List
const styles = StyleSheet.create({
    headPost: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 2,
        backgroundColor: '#fff',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        height: 60,


    },
    bottomP: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginBottom: 1,
        paddingBottom: 6


    },
    MPost: {
        flex: 1,

        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: '#fff',
        marginTop: 3,
        height: 150,

        padding: 14,



    },
    container: {
        paddingTop: 20,
        marginRight: 10,
        marginLeft: 10
    }


})