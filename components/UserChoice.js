import React from "react";
import {View,Text,Image } from "react-native";
import Styles from "./css/UserChoice";
export default class UserChoice extends React.Component{
    render = () =>{
        return <View style={Styles.UserChoice}>
                    <Text style={Styles.header}>
                        Welcome
                    </Text>
                    <View style={Styles.Container}>
                        <View style={Styles.divAddRoom}>
                            <Image source={require("./img/plusicon.png")} style={Styles.addRoom}/>
                        </View>
                        <View style={Styles.divAddRoom}>
                            <Image source={require("./img/edit.png")} style={Styles.addRoom}/>
                        </View>
                    </View>
                </View>;
    }
}