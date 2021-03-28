import React, { Fragment,useState } from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView,StatusBar,Button } from 'react-native'
import Form from './src/components/Form';
import Footer from './src/components/Footer';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [interest,setInterest]=useState(null);
  const [months, setMonths] = useState(null);
  const calculate=()=>{
    console.log('Capital:', capital)
    console.log('Interest:', interest)
    console.log('Months:', months)

  }
  return ( 
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor={globalStlyles.PRIMARY_COLOR}/>
      <SafeAreaView style={{flex:1, backgroundColor:"#FFF"}}>
        <View style={styles.safeArea}>
          <View style={styles.background}/>
          <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
          <Form 
          setCapital={setCapital} 
          setInterest={setInterest} 
          setMonths={setMonths}
          />
        </View>

      <View>
        <Text>Resultado</Text>
        <Text>$0.00</Text>
      </View>

      <Footer calculate={calculate}/>

      </SafeAreaView>
    </Fragment>
    
   );
}

const styles=StyleSheet.create({
  safeArea:{
    // backgroundColor:globalStlyles.PRIMARY_COLOR,
    height:290,

    alignItems:'center'
  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#FFF',
    marginTop:15,
  },
  background:{
    backgroundColor:globalStlyles.PRIMARY_COLOR,
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    position:'absolute',
    zIndex:-1
  },
  result:{
    
  }
})
 
export default App;