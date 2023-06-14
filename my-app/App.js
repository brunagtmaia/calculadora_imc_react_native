//importando o react 
import React from "react";
//importando componentes 
import {View, Text} from 'react-native';

const Saudacao = ({name}) =>{
  return(
    <View style={ {alignItems: 'center'}}>
      <Text style={ {fontSize: 26}}>{name} programadora!</Text>
    </View>
  )
}
export default function Conj(){
  return(
    <View style={ {alignItems: 'center', top:100}}>
      <Saudacao name="Bruna"/>
      <Saudacao name="Larissa"/>
      <Saudacao name="Lua"/>
      <Saudacao name="Maisa"/>
    </View>
  )
}