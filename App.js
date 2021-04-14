import React, { Fragment,useState,useEffect} from 'react';
import globalStlyles from './src/utils/colors'; 
import { StyleSheet,View,Text,SafeAreaView,StatusBar,Button } from 'react-native'
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResulltCalculation from './src/components/ResulltCalculation';

const App = () => {
  const [capital, setCapital] = useState(null);
  const [interest,setInterest]=useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=>{
    if(capital&&interest&&months){
      calculate()
    }
  },[capital,interest,months])

  const calculate=()=>{
    reset();
      if(!capital){
        setErrorMessage('añade la cantidad a solicitar')
      }else if(!interest){
        setErrorMessage('añade el interes del prestamo')
      }else if (!months){
        setErrorMessage('selecciona los meses a pagar',months)
      }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
        // console.log(fee.toFixed(2).replace('.',','))
        
        setTotal({
          monthlyFree:fee.toFixed(2).replace('.',','),
          totalPayable:(fee*months).toFixed(2).replace('.',',')
        })
      }

  }
  const reset=()=>{
    setErrorMessage('');
    setTotal(null);
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

      <ResulltCalculation  errorMessage={errorMessage} 
      capital={capital}
      interest={interest}
      months={months}
      total={total}
      />

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