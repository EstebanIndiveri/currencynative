import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResulltCalculation(props) {
    const{errorMessage,capital,interest,month,total}=props;
    return (
        <View style={styles.content}>
            {total && (
                <Text>Result total: </Text>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginTop:100,
        marginHorizontal:40,
    },
    error:{
        textAlign:'center',
        color:'#F00',
        fontWeight:'bold',
        fontSize:20,
    }
})
