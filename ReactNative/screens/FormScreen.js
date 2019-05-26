import React, { Component } from 'react';
import { StyleSheet, View,Button,Alert,TextInput,Keyboard ,ToastAndroid} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
      },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
      }
  });
export default class FormScreen  extends Component {
    static navigationOptions = {
        title: 'Form Screen',
      };


      constructor(props){
        super(props);
        this.state = {name:'',age:'',password:''}
      }


      
onPressLearnMore=(data)=>{
    ToastAndroid.show(data, ToastAndroid.SHORT);

}


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
/>
<TextInput
            style={styles.textInput}
            placeholder="Your Age"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.age}
            onChangeText={(age) => this.setState({age})}
/>
<TextInput
            style={styles.textInput}
            placeholder="Password"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
/>
<Button title="Save"
                color="#841584"
                accessibilityLabel="Save"
                onPress={() =>navigate('Profile', {name: this.state.name})}
                ></Button>
      </View>
      
    );
  }
}
