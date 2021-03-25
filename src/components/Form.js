import React,{useState} from 'react';
// import RNPickerSelect from 'react-native-picker-select';
import Picker from '@gregfrench/react-native-wheel-picker'
var PickerItem = Picker.Item;


import { View,Text,StyleSheet,TextInput } from 'react-native';
import globalStyles from '../utils/colors';
const Form = () => {
    const [selectedItem, setSelectedItem ] = useState(2);
  const [itemList , setItemList ] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
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
        <Picker style={{width: 200, height: 100}}
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{color:"#FFF", fontSize:26}}
          onValueChange={(index) => setSelectedItem(index) }>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i}/>
          ))}
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
    }
})
 
export default Form;