import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";

export default function InputToDo({ text, setText, setList}) {
  return(
    <View style={s`flex-row justify-center items-center`}>
      <TextInput
        onChangeText = {setText} 
        value = {text} 
        style = {s`border-black border-solid h-10 w-52 text-xl`}/>
        <TouchableOpacity style={s`m-5 bg-blue-400 w-20 h-10 items-center justify-center`}
        onPress = {() => {setList((pre) => [...pre, {id:Math.random(),todo: text}])
        setText()}}>
          <Text style={s`font-black text-while`}>+</Text>
        </TouchableOpacity>
    </View>
  )
}