
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class main extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/cat01.jpg')} />
        <Text style={styles.textInput}>
          Input Something
        </Text>

      </View>

    )
  }

}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  }

});



AppRegistry.registerComponent('MeowMe', () => main);
