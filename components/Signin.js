import React from "react";
import {Text, View, Image ,Alert ,TouchableOpacity} from "react-native";
import InputBox from "./InputBox";
import Styles from "./css/Signin";
export default class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:null,
            password:null
        };
    }

    sendEmailAndPassword(){
        const user = {};
        user.email = this.state.email,
        user.password = this.state.password;
        this.props.login(user);
        Alert.alert(this.state.email);
    }
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
                    setData={(email)=>this.setState({email})}
                />
                <InputBox title={"Password"} 
                    secureTextEntry={true}
                    keyboardType={"default"}
                    setData={(password)=>this.setState({password})}
                />
            </View>
            <TouchableOpacity style={Styles.SubmitButtonDiv}
                onPress={() =>{this.sendEmailAndPassword();}}
            >
                <Image source={require("./img/arrowWhite.png")} style={Styles.submitButton}/>
            </TouchableOpacity>
        </View>;
    }
}