import React from "react";
import {View , Text ,TouchableOpacity, TextInput } from "react-native";
import Styles from "./css/InputBoxInsideStyle";
export default class InputBoxInside extends React.Component{
    constructor(){
        super();
        this.state = {
            data:null
        }
    }
    render(){
        return <View style={Styles.InputBoxBody}>
                    <TextInput 
                        style={this.props.selected == null ? Styles.InputBox : Styles.InputBoxSelected}
                        ref = {textInput =>(this.textInput = textInput)}
                        onEndEditing={()=>this.setState({data:this.textInput._lastNativeText}) } 
                        />
                        <View style={Styles.statusOfInput}>{this.props.selected !== null && <Text >&#x2714;</Text>}</View>
                    <TouchableOpacity style={Styles.InputBoxBodyButtonDiv} 
                        onPress={()=>this.props.setData(this.state.data) }>
                        <Text style={Styles.InputBoxBodyButton}>{this.props.title}</Text>
                    </TouchableOpacity>
    </View>;
    }
} 