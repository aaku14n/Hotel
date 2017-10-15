import React from "react";
import { LinearGradient } from 'expo';
import Signin from "./Signin";
import Styles from "./css/Signin";
export default class Home extends React.Component{
    render(){
        return !this.props.isLogedin.isLogedin ?
            <LinearGradient colors={["#3D669C", "#9866CC"]}
            style={Styles.HomeSignin}
            >
                <Signin />
            </LinearGradient>
            :
            null;
    }
}

