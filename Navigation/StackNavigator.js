import React from 'react'
import {createStackNavigator}from "@react-navigation/stack";
import TabNavigator from './TabNavigator';
import Storyscreens from '../screens/Storyscreens';

const Stack = createStackNavigator();

const StackNavigator=()=>{
  return(
  <Stack.Navigator initialRouteName="home"
  ScreenOptions={{
    headerShowen:false
  }}>
 <Stack.Screen name="Home" component={TabNavigator}/>
  <Stack.Screen name="Story" component={Storyscreens}/>
  </Stack.Navigator>
)
}

export default StackNavigator;