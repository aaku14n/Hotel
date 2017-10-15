import { StyleSheet ,Dimensions} from "react-native";
var {height, width} = Dimensions.get("window");
const Styles = StyleSheet.create({
    UserChoice:{
        height,
        width,
    },
    header:{
        height:80,
        fontSize: 20,
        paddingTop:50,
        fontWeight:"600",
        paddingLeft:30,
        shadowColor:"black",
        shadowOpacity:0.6,
        shadowOffset: {
            width: 0, 
            height: 3,
        }
    },
    Container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    divAddRoom:{
        width:70,
        height:70,
        borderRadius:35,
        margin:10,
        padding:15,
        backgroundColor:"#4DCBA8",
        shadowColor:"black",
        shadowOpacity:0.6,
        shadowOffset: {
            width: 0, 
            height: 3,
        }
    },
    addRoom:{
        width:40,
        height:40,
        
    },
    addRoomCaption:{
        position:"absolute",
        color:"white",
        fontSize:12,
        bottom:10,
        left:"50%"
    },
    addCallCaption:{
        position:"absolute",
        color:"white",
        fontSize:12,
        bottom:5,
        left:"65%"
    }
});
export default Styles;