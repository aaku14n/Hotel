import React from "react"
import { TextInput ,Alert} from 'react-native';
import Styles from "./css/SigninStyle";
export default class InputBox extends React.Component{
    render = () => {
        return <TextInput style={Styles.input} 
        placeholder={this.props.title}
        ref = {textInput =>(this.textInput = textInput)}
        keyboardType={this.props.keyboardType}
        secureTextEntry={this.props.secureTextEntry}
        onEndEditing={()=>{ this.props.setData(this.textInput._lastNativeText) }}
        underlineColorAndroid='rgba(0,0,0,0)'
        />
    };
}