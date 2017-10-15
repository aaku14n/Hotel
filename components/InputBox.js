import React from "react"
import { TextInput } from 'react-native';
import Styles from "./css/Signin";
export default class InputBox extends React.Component{
    render = () => {
        return <TextInput style={Styles.input} 
        placeholder={this.props.title}
        keyboardType={this.props.keyboardType}
        secureTextEntry={this.props.secureTextEntry}
        />
    };
}