import React, { Fragment } from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView,StatusBar } from 'react-native'

const App = () => {
  return ( 
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor={globalStlyles.PIMARY_COLOR_DARK}/>
      <SafeAreaView style={styles.safeArea}>
        <Text>Formulario HEAD</Text>
      </SafeAreaView>

      <View>
        <Text>Result</Text>
      </View>

      <View>
        <Text>footer</Text>
      </View>
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
})
 
export default App;