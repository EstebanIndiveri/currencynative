import React, { Fragment } from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView,StatusBar } from 'react-native'
import Form from './src/components/Form';

const App = () => {
  return ( 
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor={globalStlyles.PRIMARY_COLOR}/>
      <SafeAreaView style={{flex:1, backgroundColor:"#FFF"}}>
        <View style={styles.safeArea}>
          <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
          <Form/>
        </View>

      <View>
        <Text>Resultado</Text>
      </View>


      <View>
        <Text>Footer</Text>
      </View>


      </SafeAreaView>
    </Fragment>
    
   );
}

const styles=StyleSheet.create({
  safeArea:{
    backgroundColor:globalStlyles.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#FFF',
    marginTop:15,
  },
})
 
export default App;