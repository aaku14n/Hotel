import React from "react";
import {View,Text,Image,TouchableOpacity,Alert ,NavigatorIOS,TouchableHighlight} from "react-native";
import RoomBook from "./RoomBook";
import CallBook from "./CallBook";
import SubHeader from "./SubHeader";
import Styles from "./css/UserChoiceStyle";
export default class UserChoice extends React.Component{
    constructor(){
        super();
        this.state={
            routeTo:null
        };
    }
    routeTo(){
        this.setState({routeTo:null})
    }
    render = () =>{ 
        return !this.state.routeTo ? <View style={Styles.UserChoice}>
<SubHeader title={"Select Anyone for Booking"} 
    routeTo={()=>this.routeTo()}/>
                    <View style={Styles.Container}>
                        <TouchableOpacity style={Styles.divAddRoom} 
                        onPress={()=>this.setState({routeTo:"Room"})}
                        >
                            <Image source={require("./img/conRoomWhite.png")} style={Styles.addRoom}/>
                            <Text style={Styles.addRoomCaption}>Room</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.divAddRoom}
                        onPress={()=>this.setState({routeTo:"Call"})}
                        >
                            <Image source={require("./img/conCallWhite.png")} style={Styles.addRoom}/>
                            <Text style={Styles.addCallCaption}>Call</Text>
                        </TouchableOpacity>
                    </View>
        </View>
        :
        this.state.routeTo ==="Room" ? 
       <RoomBook 
                roomList={this.props.roomList}
                roomByDate={this.props.roomByDate}
                routeTo={()=>this.routeTo()} 
                getRoomList={()=>this.props.getRoomList()}
                fetchRoomByDate={(room_id,date)=>this.props.fetchRoomByDate(room_id,date)} />
        :
        <CallBook routeTo={()=>this.routeTo()} />;
    }
}