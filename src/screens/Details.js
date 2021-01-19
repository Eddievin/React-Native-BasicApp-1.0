import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Details extends React.Component{
render(){
  return(
    <View style={styles.container}>
    <View>
      <Text style={{fontSize:35}}>Details</Text>
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