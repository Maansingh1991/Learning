import React, { Component } from 'react';
import { Text, View,Button,Alert } from 'react-native';

export default class Demo extends Component {
    static navigationOptions = {
        title: 'Demo  Screen',
      };
onPressLearnMore=()=>{
Alert.alert("Button click worked");
}


  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={this.onPressLearnMore}
                ></Button>
      </View>
    );
  }
}
