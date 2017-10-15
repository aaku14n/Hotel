import { StyleSheet ,Dimensions} from "react-native";
var {height, width} = Dimensions.get("window");
const Styles = StyleSheet.create({
    HomeSignin:{  
        alignItems: "center",
        height, 
        width:width
    },
    mainDiv:{
        flex: 1,
     
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 60,
        width: (width*60)/100,
        marginTop:"20%", 
    },
    heading:{
        fontSize:40,
        fontWeight: "100",
        backgroundColor:"transparent",
        width:"auto",
        marginTop:"20%",
        marginBottom:"10%",
        color:"white",
    },
    input:{
        height: 50, 
        width:(width*80)/100,
        color:"white",
        borderColor: "gray",
        fontWeight: "100",
        backgroundColor:"rgba(0, 0, 0, 0.1)",
        paddingLeft:20,
        borderRadius:5,
        marginBottom:5,
    },
    submitButton:{
        width:50,
        height:50,
    },
    SubmitButtonDiv:{
        backgroundColor:"#4DCBA8",
        borderRadius:35,
        padding:10,
        marginTop:30,
        width:70,
        height:70,
        shadowColor:"black",
        shadowRadius:4,
        shadowOffset:{
            height:2,
            width:2
        }
    }
});
export default  Styles;