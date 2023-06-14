//importando o react 
import React from "react";
//importando vizualização e text do reac native 
import { View, Text } from "react-native";

const Saudacao = () => {
  return (
    <View stype={{ alignItems: 'center' }}> 
      <Text style={{ fontSize: 26}}>Hello Worl</Text>
    </View>
  )
}

export default function vizu(){
  return(
    <view style={{ alignItems: 'center', top: 100 }}>
      <Saudacao />
      <Saudacao />
    </view>
  )
}