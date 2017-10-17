import React from "react";
import _ from "lodash";
import moment from "moment";
import {View , Text ,TouchableOpacity } from "react-native";
import Styles from "./css/InputDropdownStyle";

const todayTemp = moment().utc("2015-10-24 20:00", "YYYY-MM-DD HH").local();
const today = moment(todayTemp, "DD-MM-YYYY");
export default class InputDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:false,
            selectedRoom:null,
            room:null
        };
        this.room = [];  
       
    }
    setRoom(room,date){
        this.props.fetchRoomByDate(room,date);
        this.props.setRoom(room);
        this.setState({selectedRoom:room,data:false});
    }
    fetchRoomByDate(room_id,date){
        this.setState({data:!this.state.data})
    }
    render(){ 
        this.room = []; 
        if(this.props.roomList && this.props.roomList.length) 
            this.props.roomList.map(roomName=>this.room.push({name:roomName.room_name,id:roomName.room_id}));
        return <View style={Styles.InputBoxBody}>
                    <View  style={this.state.selectedRoom == null ? Styles.InputBox : Styles.InputBoxSelected}> 
                        <Text 
                            onPress={()=>this.fetchRoomByDate()}
                            style={Styles.DropdownHeader}>
                            {this.state.selectedRoom ? 
                                this.room[_.findIndex(this.room,item=>item.id==this.state.selectedRoom)].name 
                                : 
                                this.props.roomList ? this.props.roomList[0].room_name
                                : 
                                "Choose Room"}
                        </Text>
                        <View style={Styles.DropdownBody}>
                            {this.state.data && this.room.map(room =><Text 
                                key={room.id} 
                                style={Styles.DropdownBodyItem}
                                onPress={()=>this.setRoom(room.id,today)}
                            >{room.name}</Text>)}
                        </View>
                        
                    </View>
                    <View style={Styles.statusOfInput}>
                        {this.props.selected !== null && <Text style={{color:"green"}}>&#x2714;</Text>}
                        </View>
                    <TouchableOpacity style={Styles.InputBoxBodyButtonDiv} 
                        onPress={()=>{this.props.fetchRoom();
                        this.setState({data:!this.state.data});} }>
                        <Text style={Styles.InputBoxBodyButton}>{this.props.title}</Text>
                    </TouchableOpacity>
        </View>;
    }
} 