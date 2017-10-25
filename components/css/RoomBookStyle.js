import { StyleSheet, Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
const Styles = StyleSheet.create({
    RoomBook: {
        height,
        width,
        backgroundColor: "#e6e6e6"
    },
    SearchBody: {
        marginTop: 20
    },
    subHeading: {
        marginLeft: 20,
        fontSize: 12,
        color: "gray",
        marginBottom: 5
    },
    DateBody: {
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 10,
        width
    },
    borderColorRed: {
        borderColor: "red",
        borderWidth: 1
    },
    DateBodyItem: {
        width: width / 6,
        borderWidth: 0.5,
        padding: 5,
        borderColor: "#e6e6e6",
        alignItems: "center",
        justifyContent: "center"
    },
    DateBodyItemSelected: {
        width: width / 6,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: "#4DCBA8",
        borderColor: "#e6e6e6",
        alignItems: "center",
        justifyContent: "center"
    },
    DateBodyItemDay: {
        fontSize: 10,
        color: "#a5a5a5"
    },
    DateBodyItemDate: {
        fontSize: 25
    },
    timeBodyItem: {
        width: width / 6,
        borderWidth: 0.5,
        padding: 5,
        borderColor: "#e6e6e6",
        alignItems: "center",
        justifyContent: "center"
    },
    timeBodyItemSelected: {
        width: width / 6,
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: "#4DCBA8",
        borderColor: "#e6e6e6",
        alignItems: "center",
        justifyContent: "center"
    },
    timeBodyItemDisabled: {
        width: "16.7%",
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: "#b1071c",
        borderColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    RoomBookSubmit: {
        position: "absolute",
        width: "100%",
        backgroundColor: "#4DCBA8",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        left: 0
    },
    RoomBookSubmitText: {
        color: "white",
        fontSize: 18,
        fontWeight: "400"
    }
});

export default Styles;
