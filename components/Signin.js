import React from "react";
import {Text, View, Image ,Alert ,TouchableOpacity} from "react-native";
import InputBox from "./InputBox";
import Popup from "./Popup";
import Styles from "./css/SigninStyle";
import {FAILURE,SUCCESS} from "../actions/config";
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
        user.email_id = this.state.email,
        user.password = this.state.password;
        this.props.login(user);
    }
    render(){
        return  <View style={Styles.mainDiv}>
            {this.props.isLogedin.status === SUCCESS && <Popup message={"You signed In Succesfully"}/>}
            {this.props.isLogedin.status === FAILURE && <Popup message={"Sorry We did'nt find You"}/>}
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