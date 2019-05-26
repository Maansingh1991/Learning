import React, { Component } from 'react';
import { Text, View,Button,Alert } from 'react-native';

export default class DemoHomeScreengit  extends Component {
    static navigationOptions = {
        title: 'Demo Home Screen',
      };
onPressLearnMore=()=>{
Alert.alert("Button click worked");
}


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Button title="Demo Home Screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => navigate('Profile', {name: 'Jane'})}
                ></Button>
      </View>
    );
  }
}
