import React from "react";
import { LinearGradient } from "expo";
import SigninContainer from "../containers/SigninContainer";
import UserChoiceContainer from "../containers/UserChoiceContainer";
import Styles from "./css/Signin";
export default class Home extends React.Component{
    render(){
        return this.props.isLogedin.isLogedin ?
            <LinearGradient colors={["#3D669C", "#9866CC"]}
                style={Styles.HomeSignin}
            >
                <SigninContainer />
            </LinearGradient>
            :
            <UserChoiceContainer />;
    }
}

