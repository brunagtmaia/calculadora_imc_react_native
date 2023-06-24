//importando o react 
import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, StatusBar, TextInput,TouchableOpacity} from 'react-native';
// importando icones que o próprio expo fornece
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

export default function calculadoraIMC(){
  //Criando os estados
  const [weight, setweight] = useState(null);
  const [height, setheight] = useState(null);
  const [imc, setimc] = useState(null);
  const [classification, setclassification] = useState('');
  //criando funções
  const handleWeight = (value) => {
    if(value.length >0){
      setweight(Number(value));
    }
  }
  const handleheight = (value) => {
    if(value.length >0){
      setheight(Number(value));
    }
  }
  const calculate = () => {
    if (weight && height){
      const result = weight / (height * height);
      setimc(result);
    }
  }
  const toRank = () => {
    if (imc <18.5){
      setclassification('Abaixo do peso');
    }else if (imc >= 18.5 && imc <= 24.9){
      setclassification('Peso ideal')
    }else if (imc >= 25 && imc <= 29.9){
      setclassification('Sobrepeso')
    }else if (imc >= 30 && imc <= 34.9){
      setclassification('Obesidade class I')
    }else if (imc >= 35 && imc <= 39.9){
      setclassification('Obesidade class II')
    }else{
      setclassification('Obesidade class III')
    }
  }

  const reset = () => {
    setweight(null);
    setheight(null);
    setimc(null);
    setclassification('');
  }
  useEffect(() => {
    toRank();
  }, [imc])


  return(
    <SafeAreaView style={styles.conteiner}> 
      {/* cabeçalho com o titulo */}
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora IMC</Text>
      </View>
      {/* Área onde vai ficar todos os inputs */}
      <View style={styles.inptsArea}>
        {/* recebe os dados referente ao peso  */}
        <View style={styles.weight}>
          <FontAwesome5 name="weight" size={32} color="black"/>
          <Text style={styles.label}>Peso (Kg)</Text>
          <TextInput 
            style={styles.input}
            placeholder='Kg'
            keyboardType='numeric'
            onChangeText={(value) => handleWeight(value)}
          />
        </View>
        {/* recebe a altura  */}
        <View style={styles.height}>
          <MaterialCommunityIcons name="human-male-height" size={32} color="black"/>
          <Text style={styles.label}>Altura</Text>
          <TextInput 
            style={styles.input}
            placeholder='m'
            keyboardType='numeric'
            onChangeText={(value) => handleheight(value)}
          />
        </View>
      </View>
      <View style={styles.result}>
        {imc == null ? (
          <TouchableOpacity style={(height == null || weight == null)? styles.buttonDisable : styles.button} onPress={calculate} disabled={(height == null || weight == null)}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={(height !== null || weight !== null) ? styles.buttonResetDisable : styles.buttonReset} onPress={reset}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        )}
        
        {/* somente quando essas condições forem diferentes que vai dar certo */}
        {(imc !== null && classification !== '') && (
          <View style={{alignItems: 'center', justifyContent: 'space-around'}}>
            <Text style={styles.resultText}>Seu IMC:</Text>
            <Text style={styles.resultValue}>{imc.toFixed(2)}</Text>
            <Text style={styles.resultClassification}>Classificação</Text>
            <Text style={styles.resultClassificationValue}>{classification}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'#D9D9D9',
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flex: 0.1, //ocupa 10% do conteiner 
    alignItems: 'center',
  }, 
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  inptsArea: {
    flex: 0.5, //50% da tela
    alignItems:'center',
    justifyContent: 'space-evenly'
  },
  weight :{
    flex: 0.5,
    alignItems: 'center'
  },
  height: {
    flex: 0.5,
    alignItems: 'center'
  },
  label:{
    fontSize:24,
    top: 10
  },
  input:{
    width: 100,
    fontSize:22,
    top:14,
    textAlign: 'center',
    borderBottomWidth:1
  },
  result:{
    flex: 0.4,
    alignItems: 'center'
  },
  button:{
    width: 150,
    backgroundColor: '#0047AB',
    padding:8,
    borderRadius: 16
  },
  buttonDisable:{
    width: 150,
    backgroundColor: '#87CEEB',
    padding:8,
    borderRadius: 16
  },
  btnText:{
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF'
  },
  buttonReset:{
    width: 150,
    backgroundColor: '#CD5C5C',
    padding:8,
    borderRadius: 16
  },
  buttonResetDisable:{
    width: 150,
    backgroundColor: '#FF6961',
    padding:8,
    borderRadius: 16
  },
  resultText:{
    top: 30,
    fontSize: 24,
    fontWeight: 'bold'
  },
  resultValue:{
    fontSize: 30,
    top: 30,
    color: '#0047AB'
  },
  resultClassification:{
    top:50,
    fontSize: 24,
    fontWeight: 'bold'
  },
  resultClassificationValue:{
    fontSize: 30, 
    top: 50, 
    color: 'red'
  }
})