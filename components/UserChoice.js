import React from "react";
import {View,Text,Image,TouchableOpacity,Alert ,NavigatorIOS,TouchableHighlight} from "react-native";
import Styles from "./css/UserChoiceStyle";
export default class UserChoice extends React.Component{
    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
      }
    
      _onForward() {
        let nextIndex = ++this.props.index;
        this.props.navigator.push({
          component: <View><Text>dflfdjl</Text></View>,
          title: 'Scene ' + nextIndex,
          passProps: {index: nextIndex}
        });
      }
    render = () =>{
        return (<View style={Styles.UserChoice}>
                    <Text style={Styles.header}>
                        Select Anyone for Booking
                    </Text>
                    <View style={Styles.Container}>
                        <TouchableOpacity style={Styles.divAddRoom} 
                        onPress={()=>this._onForward}
                        >
                            <Image source={require("./img/conRoomWhite.png")} style={Styles.addRoom}/>
                            <Text style={Styles.addRoomCaption}>Room</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.divAddRoom}
                        onPress={()=>Alert.alert("i am on working ..")}
                        >
                            <Image source={require("./img/conCallWhite.png")} style={Styles.addRoom}/>
                            <Text style={Styles.addCallCaption}>Call</Text>
                        </TouchableOpacity>
                    </View>
        </View>
        );
    }
}