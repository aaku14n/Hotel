import React from "react";
import {Text, View, Image} from "react-native";
import InputBox from "./InputBox";
import Styles from "./css/Signin";
export default class Signin extends React.Component{
    render(){
        return  <View >
                    <Image source={require("./img/XelpmocLogoWhite.png")} style={Styles.logo}/>
                    <Text style={Styles.heading}>Welcome Aboard!</Text>
                    <View>
                        <InputBox title={"Email"} />
                        <InputBox title={"Password"} />
                    </View>
                    <View style={Styles.SubmitButtonDiv}>
                        <Image source={require("./img/arrowWhite.png")} style={Styles.submitButton}/>
                    </View>
                </View>;
    }
}