import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Home extends React.Component{
render(){
  return(
    <View style={styles.container}>
    <View style={{paddingTop:50}}>
      <View style={{flexDirection:'row', marginHorizontal:30, justifyContent:'space-between'}}>
        <Image 
        resizeMode='contain'
        style={{height:50, width:50}}
        source={require('../images/menu.png')}
        />
      <Image 
        style={{
          height:60, 
          width:60, 
          borderRadius:100,
          borderWidth:5,
          borderColor:'#00192D'
        }}
        source={require('../images/profile.jpg')}
        />
      </View>
    </View>

    <View style={{padding:30}}>
      <Text style={{
        color:'#fff',
        fontSize:30,
        fontWeight:'700',
      }}>My Budget</Text>
      <Text style={{
        color:'#fff',
        fontWeight:'700',
        fontSize:50
      }}>$ 521,436</Text>
    </View>
  </View>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex: 1,
 }
})