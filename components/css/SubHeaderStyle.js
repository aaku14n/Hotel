import { StyleSheet ,Dimensions} from "react-native";
var {height, width} = Dimensions.get("window");
const Styles = StyleSheet.create({
SubHeaderDiv:{
    flexDirection:"row",
    backgroundColor:"white",
    height:65,
    paddingTop:30,
    paddingLeft:20,
    shadowColor:"black",
    shadowOpacity:0.6,
    shadowOffset: {
        width: 0, 
        height: 1,
    }
},
SubHeader:{
    top:5,
    left:10,
    fontSize:20,
    fontWeight:"600"
},
backButton:{
    width:30,
    height:30,
},
});
export default Styles;