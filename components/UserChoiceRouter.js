import React from "react";
import PropTypes from "prop-types";
import { Button, NavigatorIOS, Text, View } from "react-native";
import UserChoice from "./UserChoice";
export default class UserChoiceRouter extends React.Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: UserChoice,
                    title: "Select Anyone For Booking",
                    passProps: {index: 1},
                }}
                style={{flex: 1}}
            />
        );
    }
}