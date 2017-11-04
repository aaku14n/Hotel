import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo";
import SigninContainer from "../containers/SigninContainer";
import UserDashBoard from "../components/userDashboard";
import UserChoiceContainer from "../containers/UserChoiceContainer";

import Styles from "./css/SigninStyle";
export default class Home extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false}
            >
                {!this.props.isLogedin.isLogedin ? (
                    <LinearGradient
                        colors={["#3D669C", "#9866CC"]}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={Styles.HomeSignin}
                    >
                        <SigninContainer />
                    </LinearGradient>
                ) : (
                    // <UserDashBoard />
                    <UserChoiceContainer />
                )}
            </KeyboardAwareScrollView>
        );
    }
}
