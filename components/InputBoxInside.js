import React from "react";
import {View , Text ,TouchableOpacity, TextInput } from "react-native";
import Styles from "./css/InputBoxInsideStyle";
export default class InputBoxInside extends React.Component{
    render(){
        return <View style={Styles.InputBoxBody}>
        <TextInput style={Styles.InputBox}/>
        <TouchableOpacity style={Styles.InputBoxBodyButtonDiv} onPress={()=>console.log('Click Me...')}>
            <Text style={Styles.InputBoxBodyButton}>{this.props.title}</Text>
        </TouchableOpacity>
    </View>;
    }
} 