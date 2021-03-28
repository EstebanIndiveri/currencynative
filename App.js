import React, { Fragment,useState } from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView,StatusBar,Button } from 'react-native'
import Form from './src/components/Form';
import Footer from './src/components/Footer';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [interest,setInterest]=useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const calculate=()=>{
      if(!capital){
        console.log('añade la cantidad a solicitar')
      }else if(!interest){
        console.log('añade el interes del prestamo')
      }else if (!months){
        console.log('selecciona los meses a pagar')
      }else{
        const i =interest/100;
        const fee=capital/((1-Math.pow(i+1-months))/i);
        setTotal({
          monthlyFree:fee.toFixed(2).replace('.',','),
          totalPayable:(fee*months).toFixed(2).replace('.',',')
        })
      }

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