import React from "react";
import {View , Text ,TouchableOpacity} from "react-native";
export default class CallBook extends React.Component{
    render()
    {
        return  <View style={{justifyContent:"center",alignContent:"center",marginTop:"50%"}}>
            <TouchableOpacity onPress={()=>this.props.routeTo()}>
                <Text>Call</Text>
                </TouchableOpacity>
                </View>;
    }
}