/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DemoCallAPI from './src/DemoCallAPI';



const App =  () => {


  return (
    <View style={styles.container}>
      <DemoCallAPI/>
    </View>
  );
};

const styles = StyleSheet.create({
 container : {
   
 }
});

export default App;
