import { StyleSheet ,Dimensions} from "react-native";
const Styles = StyleSheet.create({
    InputBoxBody:{
        backgroundColor:"white",
        width:"100%",
        padding:10,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        flexDirection:"row"
    },
    InputBox:{
        paddingLeft:15,
        width:"75%",
        height:30,
        marginRight:5,
    },
    InputBoxBodyButtonDiv:{
    width:"25%",
    height:25,
    backgroundColor:"#1e35a7",
    top:2.5,
    paddingTop:2,
    paddingBottom:2,
    alignItems:"center"
    },
    InputBoxBodyButton:{
        padding:5,
        fontSize:12,
        color:"white"
    },

});
export default Styles;