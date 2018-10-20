
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from 'react-native-i-text-input';
export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to RNITextInput!</Text>
        <Text style={styles.instructions}>Focus the input filed and try sending otp from your server. After receving OTP keyboard will suggest you to enter otp from messages.</Text>
        <TextInput style={{width: '70%', height: 60}} placeholder={"Enter your otp"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
