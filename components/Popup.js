import React from "react";
import { Text, View } from "react-native";
import Styles from "./css/PopupStyle";
export default class popup extends React.Component{
    render = () =>{
        return <View style={Styles.Popup}>
                    <Text style={{fontSize:20}}>{this.props.message}</Text>
                </View>;
    }
}