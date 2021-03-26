import React,{useState} from 'react';
// import RNPickerSelect from 'react-native-picker-select';
// import Picker from '@gregfrench/react-native-wheel-picker'
import {Picker} from '@react-native-picker/picker'
var PickerItem = Picker.Item;


import { View,Text,StyleSheet,TextInput } from 'react-native';
import globalStyles from '../utils/colors';
const Form = () => {
const [selectedLanguage, setSelectedLanguage] = useState();
    return ( 
        <>
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
           <View>
           <Text>
           <Picker
           style={{width:300,height:50,backgroundColor:'white',color:'#FFF'}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    {setSelectedLanguage(itemValue)
    console.log(itemValue)
    }
  }>
  <Picker.Item label="3 meses" value="3" />
  <Picker.Item label="6 meses" value="6" />
  <Picker.Item label="12 meses" value="12" />
  <Picker.Item label="24 meses" value="24" />
  <Picker.Item label="48 meses" value="48" />


</Picker>
      </Text>
           </View>
        </View>
          
        </>
     );
}

const styles=StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        width:"85%",
        paddingHorizontal:50,
        backgroundColor:globalStyles.PIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center',
    },
    viewInputs:{
        flexDirection:'row',
        width:'100%',
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
const pickerSelectStyles=StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        color:'black',
        paddingRight:30,
        backgroundColor:'#FFF',
        borderRadius:4,
        marginLeft:-5,
        marginRight:-5
    },
    inputAndroid:{
        fontSize:16,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:30,
        backgroundColor:"#FFF"
    }
})
 
export default Form;