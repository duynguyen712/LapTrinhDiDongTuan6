import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { s } from "react-native-wind";
import Listtodo from './components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FetchToDo from './components/FetchToDo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="ToDoList" component={FetchToDo} />
    </Stack.Navigator>
  </NavigationContainer>


  );
}


