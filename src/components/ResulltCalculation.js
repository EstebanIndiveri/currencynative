import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResulltCalculation(props) {
    const{errorMessage,capital,interest,month,total}=props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxresult}>
                    <Text style={styles.title}>Resumen:</Text>
                    {/* <View style={styles.valuer}>
                        <Text>Cantidad solicitada:</Text>
                        <Text>{capital}</Text>
                    </View> */}
                    <DataResult title={'cantidad solicitada'} value={capital}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}
function DataResult(props){
    const{title,value}=props;
    return (
        <View style={styles.valuer}>
        <Text>{title}</Text>
        <Text>{value}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    content:{
        marginHorizontal:40,
    },
    error:{
        textAlign:'center',
        color:'#F00',
        fontWeight:'bold',
        fontSize:20,
    },
    boxresult:{
        padding:30,
    },
    title:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30,
    },
    valuer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    }
})
