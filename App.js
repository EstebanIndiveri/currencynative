import React, { Fragment } from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView } from 'react-native'

const App = () => {
  return ( 
    <Fragment>
      <SafeAreaView style={styles.safeArea}>
        <Text>Form</Text>
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
    opacity:.6
  },
})
 
export default App;