import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends React.Component{
render(){
  return(
    <View style={styles.container}>
    <View>
      <Text>Write Here</Text>
    </View>
  </View>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   justifyContent:'center',
   alignItems:'center',
   flex: 1,
 }
})