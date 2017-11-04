import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
const Styles = StyleSheet.create({
    userDashboardHeader: {
        height: 65,
        justifyContent: "flex-end"
    },
    userDashboardBuffer: {
        flexDirection: "row"
    },
    userDashboardHeaderTitle: {
        fontSize: 25,
        marginLeft: "30%"
    },
    userDashboardHeaderAddButton: {
        width: 25,
        height: 25,
        marginLeft: "10%"
    },
    userDashboardHeaderLogOutButton: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    userDashboardTabHeader: {
        height: 60,
        flexDirection: "row",
        backgroundColor: "#158c1b"
    },
    userDashboardTabHeaderPart: {
        width: "50%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    userDashboardTabHeaderImg: {
        width: 30,
        height: 30
    }
});

export default Styles;
