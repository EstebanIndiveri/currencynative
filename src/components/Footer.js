import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

export default function Footer(props) {
    const{calculate}=props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity onPress={calculate}>
                <View style={styles.button}>
                <Text style={styles.text}>Calcular</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:colors.PRIMARY_COLOR,
        height:90,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color:'#FFF',
        textAlign:'center'
    },
    button:{
        backgroundColor:colors.PIMARY_COLOR_DARK,
        padding:16,
        borderRadius:20,
        width:'75%',
    }
})
