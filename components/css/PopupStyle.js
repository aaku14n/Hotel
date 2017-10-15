import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    Popup:{
        position:"absolute",
        padding:15,
        width:"90%",
        backgroundColor:"#d3d3d3",
        zIndex:2,
        shadowOpacity:0.6,
        top:40,
        alignItems:"center",
        shadowOffset:{
            height:10,
            width:10
        }
    }
});
export default Styles;