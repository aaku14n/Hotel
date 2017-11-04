import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "./css/UserDashBoardStyle";
export default class UserDashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            room: true,
            call: false
        };
    }
    render() {
        return (
            <View style={Styles.userDashboard}>
                <View style={Styles.userDashboardHeader}>
                    <View style={Styles.userDashboardBuffer}>
                        <Text style={Styles.userDashboardHeaderTitle}>
                            Conf Room
                        </Text>
                        <Image
                            source={require("./img/plusicon.png")}
                            style={Styles.userDashboardHeaderAddButton}
                        />
                        <Image
                            source={require("./img/signoutimage.png")}
                            style={Styles.userDashboardHeaderLogOutButton}
                        />
                    </View>
                </View>
                <View style={Styles.userDashboardTabHeader}>
                    <View
                        style={[
                            Styles.userDashboardTabHeaderPart,
                            this.state.room && S
                        ]}
                    >
                        <Image
                            source={require("./img/plusicon.png")}
                            style={Styles.userDashboardTabHeaderImg}
                        />
                        <Text>Room</Text>
                    </View>
                    <View style={Styles.userDashboardTabHeaderPart}>
                        <Image
                            source={require("./img/plusicon.png")}
                            style={Styles.userDashboardTabHeaderImg}
                        />
                        <Text>Call</Text>
                    </View>
                </View>
            </View>
        );
    }
}
