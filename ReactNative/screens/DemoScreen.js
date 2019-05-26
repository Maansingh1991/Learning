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
    const {navigate} = this.props.navigation;
    const name = this.props.navigation.state.params.name
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{name}</Text>
        <Button title="Go To Form Screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => navigate('FormScreen', {name: 'Jane'})}
                ></Button>
      </View>
    );
  }
}
