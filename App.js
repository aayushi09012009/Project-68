import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './screens/fbScreen';
import InstagramScreen from './screens/inScreen';

export default function App() {
  render(){
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search : {screen:SearchScreen},
})
const Appcontainer = createAppContainer(TabNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
