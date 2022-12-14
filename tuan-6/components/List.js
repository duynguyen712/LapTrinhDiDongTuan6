import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";
import InputToDo from './Input';
import FlatListToDo from './FlatList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Listtodo({nav}) {
  const [list, setList] = useState([]) 
  const [text, setText] = useState('');
  return(
    <SafeAreaView style={s`items-center justify-center`}>
      <InputToDo text={text} setText={setText} setList={setList}/>
      <FlatListToDo setList={setList} list={list}/>
    </SafeAreaView>
  )
}