import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import globalStyles from '../utils/colors';
const Form = () => {
    return ( 
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                placeholder='Cantidad a pedir'
                keyboardType='numeric'
                style={styles.input}
                />
                 <TextInput
                placeholder='Interes %'
                keyboardType='numeric'
                style={[styles.input,styles.inputPercentage]}
                />
            </View>
        </View>
     );
}

const styles=StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:-90,
        width:"85%",
        paddingHorizontal:50,
        backgroundColor:globalStyles.PIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center',
    },
    viewInputs:{
        flexDirection:'row',
        width:'100%'
    },
    input:{
        height:50,
        backgroundColor:'#FFF',
        borderWidth:1,
        borderColor:globalStyles.PRIMARY_COLOR,
        borderRadius:5,
        width:"60%",
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        color:"#323232",
        paddingHorizontal:20
    },
    inputPercentage:{
        width:'40%',
        marginLeft:5
    }
});
 
export default Form;