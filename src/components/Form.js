import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import globalStyles from '../utils/colors';
const Form = () => {
    return ( 
        <View>
            <TextInput
            placeholder='Cantidad a pedir'
            />
        </View>
     );
}
 
export default Form;