import React from "react"
import {View,Text ,Image, TouchableOpacity} from "react-native"
import Styles from "./css/SubHeaderStyle";
export default class SubHeader extends React.Component{
    render(){
        return <View style={Styles.SubHeaderDiv}>
                    <TouchableOpacity onPress={()=>this.props.routeTo()}>
                    <Image source={require("./img/left_arrow1600.png")} style={Styles.backButton}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={Styles.SubHeader}>{this.props.title}</Text>
                    </View>
                </View>;
    }
}