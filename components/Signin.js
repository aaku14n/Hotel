import React from "react";
import {Text, View, Image} from "react-native";
import InputBox from "./InputBox";
import Styles from "./css/Signin";
export default class Signin extends React.Component{
    render(){
        return  <View style={Styles.mainDiv}>
                    <View>
                        <Image source={require("./img/XelpmocLogoWhite.png")} style={Styles.logo}/>
                    </View>
                    <View>
                        <Text style={Styles.heading}>Welcome Aboard!</Text>
                    </View>
                    <View>
                        <InputBox title={"Email"} 
                        keyboardType={"email-address"}
                        secureTextEntry={false}
                        />
                        <InputBox title={"Password"} 
                        secureTextEntry={true}
                        keyboardType={"default"}/>
                    </View>
                    <View style={Styles.SubmitButtonDiv}>
                        <Image source={require("./img/arrowWhite.png")} style={Styles.submitButton}/>
                    </View>
                </View>;
    }
}